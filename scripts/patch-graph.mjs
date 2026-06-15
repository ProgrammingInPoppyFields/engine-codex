#!/usr/bin/env node
// Patches Quartz plugins before build:
// 1. Graph: show global graph on homepage
// 2. Explorer: highlight active folder
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

// --- Patch 1: Graph plugin — global graph on homepage ---
const graphFile = join(process.cwd(), ".quartz", "plugins", "graph", "dist", "components", "index.js")
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
