#!/usr/bin/env node
// Patches Quartz plugins before build:
// 1. Graph: swap in white glowing nodes (scripts/graph-glow.inline.js)
// 2. Graph: show global graph on homepage
// 3. Explorer: highlight active folder
// Clears build cache so changes take effect.
// Safe to run multiple times — skips if already patched.

import { readFileSync, writeFileSync, unlinkSync } from "fs"
import { join } from "path"

const cacheFile = join(process.cwd(), "quartz", ".quartz-cache", "transpiled-build.mjs")
const cacheMap = cacheFile + ".map"
let cacheCleared = false

function clearCache() {
  if (cacheCleared) return
  try { unlinkSync(cacheFile) } catch {}
  try { unlinkSync(cacheMap) } catch {}
  cacheCleared = true
}

const graphFile = join(process.cwd(), ".quartz", "plugins", "graph", "dist", "components", "index.js")

// --- Patch 0: Graph plugin — white glowing nodes ---
// The installed plugin is re-cloned by `npm run install-plugins` and lives under
// the gitignored `.quartz/` dir, so behavior changes to it don't survive a reinstall
// unless baked in here. This swaps the compiled inline render script for our own
// build (white node fill + blurred glow halo per node) checked in at graph-glow.inline.js.
try {
  const glowMarker = 'BlurFilter({strength:6'
  let graphContent = readFileSync(graphFile, "utf-8")

  if (graphContent.includes(glowMarker)) {
    console.log("[patch] Graph: glow nodes already patched")
  } else {
    const marker = "var graph_inline_default = `"
    const start = graphContent.indexOf(marker)
    const contentStart = start + marker.length
    const end = graphContent.indexOf("`;", contentStart)

    if (start !== -1 && end !== -1) {
      const glowScript = readFileSync(join(process.cwd(), "scripts", "graph-glow.inline.js"), "utf-8")
      graphContent = graphContent.slice(0, contentStart) + glowScript + graphContent.slice(end)
      writeFileSync(graphFile, graphContent)
      clearCache()
      console.log("[patch] Graph: glow nodes applied")
    } else {
      console.log("[patch] Graph: inline script marker not found, skipping glow patch")
    }
  }
} catch {
  console.log("[patch] Graph: plugin not installed, skipping glow patch")
}

// --- Patch 1: Graph plugin — global graph on homepage ---
try {
  let graphContent = readFileSync(graphFile, "utf-8")

  if (graphContent.includes('document.body.dataset.slug==="index"')) {
    console.log("[patch] Graph: already patched")
  } else {
    const re = /var (\w+)=JSON\.parse\(\w+\.dataset\.cfg\|\|"{}"\),(\w+)=\1\.drag/
    const match = graphContent.match(re)

    if (match) {
      const cfg = match[1]
      const drag = match[2]
      const container = match[0].match(/\((\w+)\.dataset/)[1]
      const patch = `var ${cfg}=JSON.parse(${container}.dataset.cfg||"{}");if(document.body.dataset.slug==="index"){${cfg}.depth=-1;${cfg}.focusOnHover=true;${cfg}.enableRadial=true;${cfg}.scale=0.55;${cfg}.centerForce=0.15;${cfg}.repelForce=0.8}var ${drag}=${cfg}.drag`
      graphContent = graphContent.replace(match[0], patch)
      writeFileSync(graphFile, graphContent)
      clearCache()
      console.log("[patch] Graph: homepage global graph applied")
    } else {
      console.log("[patch] Graph: config pattern not found, skipping")
    }
  }
} catch {
  console.log("[patch] Graph: plugin not installed, skipping")
}

// --- Patch 2: Explorer plugin — highlight active folder ---
const explorerFile = join(process.cwd(), ".quartz", "plugins", "explorer", "dist", "components", "index.js")
try {
  let explorerContent = readFileSync(explorerFile, "utf-8")

  if (explorerContent.includes('classList.add("active","is-active")')) {
    console.log("[patch] Explorer: already patched")
  } else {
    const old = 'p.replaceWith(i),p=i}'
    if (explorerContent.includes(old)) {
      const patch = 'p.replaceWith(i),p=i;if(S(u.slug)===A){i.classList.add("active","is-active")}}'
      explorerContent = explorerContent.replace(old, patch)
      writeFileSync(explorerFile, explorerContent)
      clearCache()
      console.log("[patch] Explorer: active folder highlight applied")
    } else {
      console.log("[patch] Explorer: pattern not found, skipping")
    }
  }
} catch {
  console.log("[patch] Explorer: plugin not installed, skipping")
}

if (cacheCleared) {
  console.log("[patch] Build cache cleared")
}
