#!/usr/bin/env node

import { promises as fs } from 'node:fs'
import path from 'node:path'

const targets = process.argv.slice(2)
const roots = targets.length ? targets : ['.']
const removed = []

for (const root of roots) {
  await cleanPath(path.resolve(root))
}

if (removed.length) {
  console.log(`AppleDouble guard: ${removed.length} artifact temizlendi.`)
}

async function cleanPath(targetPath) {
  let stats
  try {
    stats = await fs.lstat(targetPath)
  } catch {
    return
  }

  const name = path.basename(targetPath)
  if (name.startsWith('._') || name === '.DS_Store') {
    await fs.rm(targetPath, { recursive: true, force: true })
    removed.push(targetPath)
    return
  }

  if (!stats.isDirectory()) {
    return
  }

  const entries = await fs.readdir(targetPath, { withFileTypes: true })
  await Promise.all(
    entries.map((entry) => cleanPath(path.join(targetPath, entry.name))),
  )
}
