const REPO = 'leuk80/digital-runners';
const BRANCH = 'main';

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[äÄ]/g, 'ae')
    .replace(/[öÖ]/g, 'oe')
    .replace(/[üÜ]/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

interface BlogPostParams {
  token: string;
  title: string;
  description: string;
  lang: 'de' | 'en';
  tags?: string[];
  author?: string;
  image?: string;
  draft?: boolean;
  content: string;
  slug?: string;
}

function buildMarkdown(params: BlogPostParams): string {
  const lines = [
    '---',
    `title: "${params.title}"`,
    `description: "${params.description}"`,
    `pubDate: ${today()}`,
    `lang: ${params.lang}`,
  ];

  if (params.tags && params.tags.length > 0) {
    const tagList = params.tags.map((t) => `"${t}"`).join(', ');
    lines.push(`tags: [${tagList}]`);
  }

  lines.push(`author: "${params.author || 'Digital Runners'}"`);

  if (params.image) {
    lines.push(`image: "${params.image}"`);
  }

  if (params.draft) {
    lines.push('draft: true');
  }

  lines.push('---', '', params.content);

  return lines.join('\n');
}

export function parseFrontmatter(markdown: string): { frontmatter: Record<string, unknown>; content: string } {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error('Kein gültiges Frontmatter gefunden (--- ... ---)');

  const raw = match[1];
  const content = match[2];
  const frontmatter: Record<string, unknown> = {};

  for (const line of raw.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value: unknown = line.slice(idx + 1).trim();

    // Parse arrays like [\"a\", \"b\"]
    if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
      try {
        value = JSON.parse(value.replace(/'/g, '"'));
      } catch { /* keep as string */ }
    }
    // Strip surrounding quotes
    if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    // Parse booleans
    if (value === 'true') value = true;
    if (value === 'false') value = false;

    frontmatter[key] = value;
  }

  return { frontmatter, content };
}

interface UploadRawMarkdownParams {
  token: string;
  markdown: string;
  lang?: 'de' | 'en';
  slug?: string;
  overwrite?: boolean;
}

export async function uploadRawMarkdown(params: UploadRawMarkdownParams): Promise<{ slug: string; url: string }> {
  const { frontmatter } = parseFrontmatter(params.markdown);

  const title = frontmatter.title as string | undefined;
  if (!title) throw new Error('Frontmatter muss "title" enthalten');

  const lang = (params.lang || frontmatter.lang) as 'de' | 'en' | undefined;
  if (!lang || !['de', 'en'].includes(lang)) {
    throw new Error('Sprache (lang) muss "de" oder "en" sein – im Frontmatter oder als Parameter');
  }

  const slug = params.slug || (frontmatter.slug as string | undefined) || slugify(title);
  const path = `src/content/blog/${lang}/${slug}.md`;

  // Check if file exists when overwrite is requested
  let sha: string | undefined;
  if (params.overwrite) {
    const checkResp = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}?ref=${BRANCH}`, {
      headers: {
        Authorization: `Bearer ${params.token}`,
        Accept: 'application/vnd.github+json',
      },
    });
    if (checkResp.ok) {
      const existing = await checkResp.json() as { sha: string };
      sha = existing.sha;
    }
  }

  const body: Record<string, string> = {
    message: sha ? `Update blog post: ${title}` : `Add blog post: ${title}`,
    content: btoa(unescape(encodeURIComponent(params.markdown))),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;

  const response = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${params.token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    if (response.status === 422 && !params.overwrite) {
      throw new Error(`Datei existiert bereits: ${slug}.md – verwende overwrite: true zum Überschreiben`);
    }
    throw new Error(`GitHub API Fehler: ${response.status} – ${JSON.stringify(error)}`);
  }

  return { slug, url: `/${lang}/blog/${slug}` };
}

export async function createBlogPost(params: BlogPostParams): Promise<{ slug: string; url: string }> {
  const slug = params.slug || slugify(params.title);
  const path = `src/content/blog/${params.lang}/${slug}.md`;
  const markdown = buildMarkdown(params);

  const body = JSON.stringify({
    message: `Add blog post: ${params.title}`,
    content: btoa(unescape(encodeURIComponent(markdown))),
    branch: BRANCH,
  });

  const response = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${params.token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    if (response.status === 422) {
      throw new Error(`Datei existiert bereits: ${slug}.md`);
    }
    throw new Error(`GitHub API Fehler: ${response.status} – ${JSON.stringify(error)}`);
  }

  return {
    slug,
    url: `/${params.lang}/blog/${slug}`,
  };
}
