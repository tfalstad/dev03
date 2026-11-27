// Contact form endpoint (Cloudflare Pages Function).
// Sends the visitor's message through Cloudflare Email Sending.
// Settings live in the Pages project, never in this repo:
//   CONTACT_TO      where messages are delivered (a verified destination address)
//   CONTACT_FROM    sender on the site's own domain, e.g. site@falstad.dev
//   CF_ACCOUNT_ID   Cloudflare account that has Email Sending enabled
//   CF_EMAIL_TOKEN  API token allowed to send email (stored as a secret)

const json = (status, body) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { "content-type": "application/json", "cache-control": "no-store" },
    });

const clean = (v, max) => (typeof v === "string" ? v.replace(/\r/g, "").trim().slice(0, max) : "");
const oneLine = (v) => v.replace(/[\n\t]+/g, " ");
const escapeHtml = (v) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function onRequestPost({ request, env }) {
    // Only accept posts from the site itself.
    const origin = request.headers.get("origin");
    if (origin && new URL(origin).host !== new URL(request.url).host) {
        return json(403, { ok: false, error: "origin" });
    }

    let data;
    try {
        data = await request.json();
    } catch {
        return json(400, { ok: false, error: "invalid" });
    }

    // Bots fill the hidden field or submit instantly. Pretend it worked.
    if (clean(data.website, 200) || Number(data.elapsed) < 2500) {
        return json(200, { ok: true });
    }

    const name = oneLine(clean(data.name, 100));
    const email = oneLine(clean(data.email, 200));
    const message = clean(data.message, 5000);

    if (!name || !message || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
        return json(400, { ok: false, error: "invalid" });
    }

    if (!env.CONTACT_TO || !env.CONTACT_FROM || !env.CF_ACCOUNT_ID || !env.CF_EMAIL_TOKEN) {
        return json(503, { ok: false, error: "unconfigured" });
    }

    const text = `${message}\n\nFrom: ${name} <${email}>\nSent from the contact form on falstad.dev`;
    const html = `<p style="white-space:pre-wrap">${escapeHtml(message)}</p><hr><p>From: ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;<br>Sent from the contact form on falstad.dev</p>`;

    const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/email/sending/send`, {
        method: "POST",
        headers: { authorization: `Bearer ${env.CF_EMAIL_TOKEN}`, "content-type": "application/json" },
        body: JSON.stringify({
            to: env.CONTACT_TO,
            from: { address: env.CONTACT_FROM, name: "falstad.dev contact form" },
            reply_to: email,
            subject: `falstad.dev: message from ${name}`,
            text,
            html,
        }),
    });

    const out = await res.json().catch(() => null);
    if (!res.ok || !out || !out.success) {
        console.log("contact send failed", res.status, JSON.stringify(out && out.errors));
        return json(502, { ok: false, error: "send" });
    }
    return json(200, { ok: true });
}

export const onRequest = () => json(405, { ok: false, error: "method" });
