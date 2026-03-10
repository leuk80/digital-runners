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
    throw new Error(`GitHub API Fehler: ${response.status} – ${(error as { message?: string }).message || 'Unbekannt'}`);
  }

  return {
    slug,
    url: `/${params.lang}/blog/${slug}`,
  };
}
