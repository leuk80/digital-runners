import type { APIRoute } from 'astro';
import { getAdminPassword, createSessionToken, setSessionCookie } from '../../../lib/admin-auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const password = getAdminPassword(locals as Record<string, unknown>);
  if (!password) {
    return new Response('Admin not configured', { status: 500 });
  }

  const data = await request.formData();
  const input = data.get('password')?.toString();

  if (!input || input !== password) {
    return redirect('/admin?error=1');
  }

  const token = await createSessionToken(password);
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/admin',
      'Set-Cookie': setSessionCookie(token),
    },
  });
};
