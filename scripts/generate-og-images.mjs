#!/usr/bin/env node

/**
 * OG Image Generator for Digital Runners
 * Generates Open Graph images for all blog posts at build time.
 * Output: public/og/{lang}/{slug}.png
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import matter from 'gray-matter';

const ROOT = resolve(import.meta.dirname, '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const OUTPUT_DIR = join(ROOT, 'public/og');
const FONT_REGULAR = join(ROOT, 'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff');
const FONT_BOLD = join(ROOT, 'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff');

const fontRegular = readFileSync(FONT_REGULAR);
const fontBold = readFileSync(FONT_BOLD);

async function generateImage(title, description) {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
          padding: '60px',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '20px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '48px',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.2,
                    },
                    children: title.length > 80 ? title.slice(0, 80) + '…' : title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '24px',
                      color: '#94a3b8',
                      lineHeight: 1.4,
                    },
                    children: description.length > 140 ? description.slice(0, 140) + '…' : description,
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { fontSize: '28px', fontWeight: 700, color: '#22d3ee' },
                    children: 'Digital Runners',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { fontSize: '20px', color: '#64748b' },
                    children: 'digital-runners.ch',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: fontBold, weight: 700, style: 'normal' },
      ],
    }
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return resvg.render().asPng();
}

async function main() {
  let count = 0;

  for (const lang of ['de', 'en']) {
    const langDir = join(BLOG_DIR, lang);
    if (!existsSync(langDir)) continue;

    const outDir = join(OUTPUT_DIR, lang);
    mkdirSync(outDir, { recursive: true });

    const files = readdirSync(langDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

    for (const file of files) {
      const slug = file.replace(/\.(md|mdx)$/, '');
      const outPath = join(outDir, `${slug}.png`);

      // Skip if already exists (incremental)
      if (existsSync(outPath)) continue;

      const content = readFileSync(join(langDir, file), 'utf-8');
      const { data } = matter(content);

      if (data.draft) continue;

      const png = await generateImage(data.title || slug, data.description || '');
      writeFileSync(outPath, png);
      count++;
      console.log(`  ✓ ${lang}/${slug}.png`);
    }
  }

  console.log(`\n  Generated ${count} OG images.`);
}

main().catch(console.error);
