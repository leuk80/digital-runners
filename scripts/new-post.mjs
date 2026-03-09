#!/usr/bin/env node

/**
 * Blog Post Generator for Digital Runners
 *
 * Usage:
 *   node scripts/new-post.mjs --title "Mein Titel" --lang de
 *   node scripts/new-post.mjs --title "My Title" --lang en --tags "UniFi,Netzwerk"
 *   node scripts/new-post.mjs --title "Mein Titel" --lang de --author "Max Muster"
 */

import { writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[äÄ]/g, 'ae')
    .replace(/[öÖ]/g, 'oe')
    .replace(/[üÜ]/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseArgs(args) {
  const parsed = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
      parsed[key] = value;
      if (value !== true) i++;
    }
  }
  return parsed;
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function generatePost({ title, description, lang, tags, author }) {
  const tagList = tags
    ? tags.split(',').map(t => `"${t.trim()}"`).join(', ')
    : '';

  return `---
title: "${title}"
description: "${description || 'TODO: Beschreibung hinzufügen'}"
pubDate: ${today()}
lang: ${lang}${tagList ? `\ntags: [${tagList}]` : ''}
author: "${author || 'Digital Runners'}"
---

Hier beginnt dein Artikel. Schreibe in Markdown.

## Erste Überschrift

Inhalt...

## Zweite Überschrift

Inhalt...
`;
}

// --- Main ---
const args = parseArgs(process.argv.slice(2));

if (args.help || !args.title || !args.lang) {
  console.log(`
Blog Post Generator – Digital Runners

Usage:
  node scripts/new-post.mjs --title "Titel" --lang de|en [Optionen]

Optionen:
  --title        Titel des Posts (Pflicht)
  --lang         Sprache: de oder en (Pflicht)
  --description  Meta-Beschreibung
  --tags         Komma-getrennte Tags, z.B. "UniFi,Netzwerk"
  --author       Autor (Standard: "Digital Runners")
  --slug         Eigener Slug (Standard: aus Titel generiert)
  --help         Diese Hilfe anzeigen
`);
  process.exit(args.help ? 0 : 1);
}

if (!['de', 'en'].includes(args.lang)) {
  console.error('Fehler: --lang muss "de" oder "en" sein.');
  process.exit(1);
}

const slug = args.slug || slugify(args.title);
const filePath = join(BLOG_DIR, args.lang, `${slug}.md`);

if (existsSync(filePath)) {
  console.error(`Fehler: Datei existiert bereits: ${filePath}`);
  process.exit(1);
}

const content = generatePost({
  title: args.title,
  description: args.description,
  lang: args.lang,
  tags: args.tags,
  author: args.author,
});

writeFileSync(filePath, content, 'utf-8');
console.log(`Blog Post erstellt: ${filePath}`);
console.log(`Slug: ${slug}`);
console.log(`URL: /${args.lang}/blog/${slug}`);
