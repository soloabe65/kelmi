/* One-shot migration: hash-named PNGs -> slugged WebP folders. Run once, then delete. */
const sharp = require("sharp")
const fs = require("fs")
const path = require("path")
const crypto = require("crypto")

const SRC = "public/images"
const DST = "public/images"

// folder -> output slug, in the order files should be numbered (sorted by original name)
const PLAN = {
  "royal executive gold": { slug: "gold" },
  executive: { slug: "executive" },
  "royal majesty": { slug: "majesty" },
  presidential: { slug: "apartment" },
  classic: { slug: "classic" },
  "Event Hall": { slug: "event-hall" },
  "Bar & Lounge": { slug: "lounge" },
  "Sonooker Bar": { slug: "snooker-bar" },
  Exterior: { slug: "exterior" },
  "Front Desk": { slug: "front-desk" },
  Hallway: { slug: "hallway" },
  logo: { slug: "logo" },
}

// Exclusions, by content hash (MD5) or filename
const SKIP_FILES = new Set([
  "public/images/Exterior/ChatGPT Image Sep 28, 2026, 02_19_52 PM.png",
  "public/images/Exterior/ChatGPT Image Sep 28, 2026, 02_22_19 PM.png",
  "public/images/Exterior/ChatGPT Image Sep 28, 2026, 02_29_48 PM.png",
  "public/images/Exterior/ChatGPT Image Sep 28, 2026, 02_34_38 PM.png",
  "public/images/Exterior/ChatGPT Image Sep 28, 2026, 02_38_41 PM.png",
  // pylon sign shots advertise a restaurant that does not exist
  "public/images/Exterior/file_00000000b038820aba8275c953a29292.png",
  "public/images/Exterior/file_00000000d6e88246814c9072a45461f2.png",
])

const md5 = (p) => crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex")

const slugOf = (name) => {
  if (name === "Sonooker Bar") return "snooker-bar"
  if (name === "Event Hall") return "event-hall"
  if (name === "Bar & Lounge") return "lounge"
  if (name === "Front Desk") return "front-desk"
  if (name === "royal executive gold") return "gold"
  if (name === "royal majesty") return "majesty"
  if (name === "presidential") return "apartment"
  return name.toLowerCase()
}

// landscape heroes 1600w, portrait 1600h, square 1200w
// NOTE: returns a Buffer, not a sharp instance - sharp pipelines are thenables
// and would be unwrapped/awaited by the async return.
async function toWebp(p, slug, quality) {
  const m = await sharp(p).metadata()
  const r = m.width / m.height
  let pipe
  if (slug === "logo") pipe = sharp(p).resize(320, 320, { fit: "inside" })
  else if (r >= 1.2) pipe = sharp(p).resize({ width: 1600 })
  else if (r <= 0.85) pipe = sharp(p).resize({ height: 1600 })
  else pipe = sharp(p).resize({ width: 1200 })
  return pipe.webp({ quality, effort: 5 }).toBuffer()
}

;(async () => {
  const manifest = []
  for (const folder of Object.keys(PLAN)) {
    const dir = path.join(SRC, folder)
    if (!fs.existsSync(dir)) {
      console.log(`SKIP missing folder: ${folder}`)
      continue
    }
    const slug = slugOf(folder)
    const files = fs
      .readdirSync(dir)
      .filter((n) => /\.png$/i.test(n))
      .sort()

    const seen = new Set()
    let n = 0
    for (const f of files) {
      const full = path.join(dir, f)
      const rel = full.replace(/\\/g, "/")
      if (SKIP_FILES.has(rel)) {
        console.log(`  skip (excluded): ${rel}`)
        continue
      }
      const h = md5(full)
      if (seen.has(h)) {
        console.log(`  skip (dupe in folder): ${rel}`)
        continue
      }
      seen.add(h)
      n += 1
      const outRel = `/images/${slug}/${slug}-${String(n).padStart(2, "0")}.webp`
      const outPath = path.join(DST, slug, `${slug}-${String(n).padStart(2, "0")}.webp`)
      fs.mkdirSync(path.dirname(outPath), { recursive: true })
      const quality = slug === "logo" ? 92 : 80
      const buf = await toWebp(full, slug, quality)
      fs.writeFileSync(outPath, buf)
      const kb = (fs.statSync(outPath).size / 1024).toFixed(0)
      const srcKb = (fs.statSync(full).size / 1024).toFixed(0)
      manifest.push({ slug, src: rel, out: outRel, kb, srcKb })
      console.log(`  ${outRel}  ${srcKb}KB -> ${kb}KB`)
    }
    console.log(`${folder} -> ${slug}: ${n} kept`)
  }
  fs.writeFileSync("_manifest.json", JSON.stringify(manifest, null, 2))
  console.log(`\nDone. ${manifest.length} images. Total WebP: ${
    (manifest.reduce((a, b) => a + Number(b.kb), 0) / 1024).toFixed(1)
  }MB (was ${(manifest.reduce((a, b) => a + Number(b.srcKb), 0) / 1024).toFixed(1)}MB)`)
})()
