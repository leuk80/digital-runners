import type { APIRoute } from 'astro';
import { getApiKey, getGitHubToken, verifyApiKey } from '../../../lib/admin-auth';
import { uploadRawMarkdown } from '../../../lib/github';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const apiKey = getApiKey(locals as Record<string, unknown>);
  const githubToken = getGitHubToken(locals as Record<string, unknown>);

  if (!apiKey || !githubToken) {
    return json({ success: false, error: 'Server nicht konfiguriert (ADMIN_API_KEY / GITHUB_TOKEN fehlt)' }, 500);
  }

  if (!verifyApiKey(request, apiKey)) {
    return json({ success: false, error: 'Ungültiger API-Key' }, 401);
  }

  let body: { markdown?: string; lang?: string; slug?: string; overwrite?: boolean };
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: 'Ungültiges JSON im Request-Body' }, 400);
  }

  const { markdown, lang, slug, overwrite } = body;

  if (!markdown || typeof markdown !== 'string') {
    return json({ success: false, error: '"markdown" ist ein Pflichtfeld (string mit Frontmatter)' }, 400);
  }

  if (lang && !['de', 'en'].includes(lang)) {
    return json({ success: false, error: 'lang muss "de" oder "en" sein' }, 400);
  }

  try {
    const result = await uploadRawMarkdown({
      token: githubToken,
      markdown,
      lang: lang as 'de' | 'en' | undefined,
      slug,
      overwrite: overwrite ?? false,
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
