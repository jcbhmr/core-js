#!/usr/bin/env node
// @ts-check
import { copyFile, cp, mkdir, readFile, writeFile } from "node:fs/promises";

await mkdir("dist", { recursive: true })
console.debug("created dist/")

await cp("src", "dist", { recursive: true })
console.debug("copied src/ to dist/")

let packageJSON = JSON.parse(await readFile("package.json", "utf8"))
delete packageJSON.exports
delete packageJSON.main
delete packageJSON.files
delete packageJSON.private
await writeFile("dist/package.json", JSON.stringify(packageJSON, null, 2))
console.debug("copied & edited package.json to dist/package.json")
