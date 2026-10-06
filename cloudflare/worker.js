// Cloudflare Worker serving yusuf.levifikri.com.
// The page HTML (index.html) is stored in KV namespace "yusuf-site" under key "index.html".
export default {
  async fetch(request, env) {
    const html = await env.SITE.get('index.html');
    if (!html) return new Response('Missing page', { status: 500 });
    return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=300' } });
  }
};
