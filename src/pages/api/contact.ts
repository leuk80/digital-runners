import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return new Response(JSON.stringify({ success: false, error: 'Email service not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Digital Runners Website <info@digital-runners.ch>',
      to: ['info@digital-runners.ch'],
      replyTo: `${name} <${email}>`,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ success: false, error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
