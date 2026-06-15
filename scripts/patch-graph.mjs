#!/usr/bin/env node
// Ensures the graph plugin shows the global graph on the homepage.
// Patches .quartz/plugins/graph/dist/components/index.js and clears build cache.
// Safe to run multiple times — skips if already patched.

import { readFileSync, writeFileSync, unlinkSync } from "fs"
import { join } from "path"

const pluginFile = join(process.cwd(), ".quartz", "plugins", "graph", "dist", "components", "index.js")
const cacheFile = join(process.cwd(), "quartz", ".quartz-cache", "transpiled-build.mjs")
const cacheMap = cacheFile + ".map"

let content
try {
  content = readFileSync(pluginFile, "utf-8")
} catch {
  console.log("[patch-graph] Graph plugin not installed, skipping")
  process.exit(0)
}

if (content.includes('document.body.dataset.slug==="index"')) {
  console.log("[patch-graph] Already patched")
  process.exit(0)
}

const re = /var (\w+)=JSON\.parse\(\w+\.dataset\.cfg\|\|"{}"\),(\w+)=\1\.drag/
const match = content.match(re)

if (!match) {
  console.log("[patch-graph] Config pattern not found, skipping")
  process.exit(0)
}

const cfg = match[1]
const drag = match[2]
const container = match[0].match(/\((\w+)\.dataset/)[1]
const patch = `var ${cfg}=JSON.parse(${container}.dataset.cfg||"{}");if(document.body.dataset.slug==="index"){${cfg}.depth=-1;${cfg}.focusOnHover=true;${cfg}.enableRadial=true;${cfg}.scale=0.55;${cfg}.centerForce=0.15;${cfg}.repelForce=0.8}var ${drag}=${cfg}.drag`

content = content.replace(match[0], patch)
writeFileSync(pluginFile, content)

// Clear build cache so Quartz picks up the change
try { unlinkSync(cacheFile) } catch {}
try { unlinkSync(cacheMap) } catch {}

console.log("[patch-graph] Homepage global graph patch applied, cache cleared")
