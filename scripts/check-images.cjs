/* Verifies every /images/... path referenced in src/ exists on disk. */
const fs = require("fs")
const path = require("path")

const SRC = "src"
const PUBLIC = "public"

const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name)
    return e.isDirectory() ? walk(p) : /\.(tsx?|mjs|js)$/.test(e.name) ? [p] : []
  })

const found = new Map()
for (const file of walk(SRC)) {
  const text = fs.readFileSync(file, "utf8")
  for (const m of text.matchAll(/["'`](\/images\/[^"'`\s]+)["'`]/g)) {
    if (!found.has(m[1])) found.set(m[1], [])
    found.get(m[1]).push(path.relative(".", file))
  }
}

// also resolve images referenced from the manifest
const manifest = fs.readFileSync(path.join(SRC, "lib", "images.ts"), "utf8")
for (const m of manifest.matchAll(/["'`](\/images\/[^"'`\s]+\.webp)["'`]/g)) {
  if (!found.has(m[1])) found.set(m[1], [])
  found.get(m[1]).push("src/lib/images.ts")
}

let missing = 0
let present = 0
for (const [ref, files] of [...found].sort()) {
  const onDisk = fs.existsSync(path.join(PUBLIC, ref.replace(/^\//, "")))
  if (onDisk) {
    present++
  } else {
    missing++
    console.log(`MISSING  ${ref}\n         used in: ${[...new Set(files)].join(", ")}`)
  }
}
console.log(`\n${present} referenced images exist, ${missing} missing.`)

// anything on disk that nothing references?
const onDiskFiles = []
const walkPub = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name)
    return e.isDirectory() ? walkPub(p) : [p]
  })
for (const f of walkPub(path.join(PUBLIC, "images"))) {
  const ref = "/" + path.relative(PUBLIC, f).replace(/\\/g, "/")
  if (!found.has(ref)) onDiskFiles.push(ref)
}
if (onDiskFiles.length) {
  console.log(`\n${onDiskFiles.length} files on disk are referenced by the manifest only or unused:`)
  onDiskFiles.forEach((f) => console.log(`  ${f}`))
}
process.exit(missing > 0 ? 1 : 0)
