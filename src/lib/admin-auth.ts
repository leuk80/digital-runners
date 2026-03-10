const COOKIE_NAME = 'admin_session';
const SESSION_HOURS = 24;

function getEnvVar(locals: Record<string, unknown>, name: string): string | undefined {
  const runtime = locals.runtime as { env?: Record<string, string> } | undefined;
  return runtime?.env?.[name] ?? (import.meta.env[name] as string | undefined);
}

export function getAdminPassword(locals: Record<string, unknown>): string | undefined {
  return getEnvVar(locals, 'ADMIN_PASSWORD');
}

export function getGitHubToken(locals: Record<string, unknown>): string | undefined {
  return getEnvVar(locals, 'GITHUB_TOKEN');
}

export function getApiKey(locals: Record<string, unknown>): string | undefined {
  return getEnvVar(locals, 'ADMIN_API_KEY');
}

export function verifyApiKey(request: Request, expectedKey: string): boolean {
  const header = request.headers.get('authorization') ?? '';
  if (!header.startsWith('Bearer ')) return false;
  const provided = header.slice(7);
  return provided.length > 0 && provided === expectedKey;
}

async function hmacSign(message: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function createSessionToken(password: string): Promise<string> {
  const timestamp = Date.now().toString();
  const signature = await hmacSign(timestamp, password);
  return `${timestamp}.${signature}`;
}

export async function verifySessionToken(token: string, password: string): Promise<boolean> {
  const [timestamp, signature] = token.split('.');
  if (!timestamp || !signature) return false;

  const age = Date.now() - parseInt(timestamp, 10);
  if (isNaN(age) || age < 0 || age > SESSION_HOURS * 60 * 60 * 1000) return false;

  const expected = await hmacSign(timestamp, password);
  return signature === expected;
}

export function getSessionCookie(request: Request): string | undefined {
  const cookies = request.headers.get('cookie') ?? '';
  const match = cookies.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  return match?.[1];
}

export function setSessionCookie(token: string): string {
  return `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${SESSION_HOURS * 3600}`;
}
