import type { APIRoute } from 'astro';
import { getAdminPassword, getGitHubToken, getSessionCookie, verifySessionToken } from '../../../lib/admin-auth';
import { createBlogPost } from '../../../lib/github';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const password = getAdminPassword(locals as Record<string, unknown>);
  const githubToken = getGitHubToken(locals as Record<string, unknown>);

  if (!password || !githubToken) {
    return json({ success: false, error: 'Server nicht konfiguriert' }, 500);
  }

  const sessionToken = getSessionCookie(request);
  if (!sessionToken || !(await verifySessionToken(sessionToken, password))) {
    return json({ success: false, error: 'Nicht authentifiziert' }, 401);
  }

  const data = await request.formData();
  const title = data.get('title')?.toString().trim();
  const description = data.get('description')?.toString().trim();
  const lang = data.get('lang')?.toString() as 'de' | 'en';
  const tagsRaw = data.get('tags')?.toString().trim();
  const author = data.get('author')?.toString().trim() || 'Digital Runners';
  const image = data.get('image')?.toString().trim();
  const draft = data.get('draft') === 'on';
  const content = data.get('content')?.toString();
  const slug = data.get('slug')?.toString().trim();

  if (!title || !description || !lang || !content) {
    return json({ success: false, error: 'Titel, Beschreibung, Sprache und Inhalt sind Pflichtfelder' }, 400);
  }

  if (!['de', 'en'].includes(lang)) {
    return json({ success: false, error: 'Sprache muss "de" oder "en" sein' }, 400);
  }

  const tags = tagsRaw
    ? tagsRaw.split(',').map((t) => t.trim().replace(/^["'\[\]]+|["'\[\]]+$/g, '')).filter(Boolean)
    : undefined;

  try {
    const result = await createBlogPost({
      token: githubToken,
      title,
      description,
      lang,
      tags,
      author,
      image,
      draft,
      content,
      slug: slug || undefined,
    });

    return json({ success: true, ...result });
  } catch (err) {
    return json({ success: false, error: (err as Error).message }, 400);
  }
};

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
