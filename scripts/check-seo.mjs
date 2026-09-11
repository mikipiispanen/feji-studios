import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://localhost:3011';
const paths = ['/', '/orka', '/styrka', '/orka/privacy', '/orka/terms', '/styrka/privacy', '/styrka/terms'];
const titles = new Set();
for (const path of paths) {
  const res = await fetch(base + path);
  assert.equal(res.status, 200, path);
  const html = await res.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `unique title: ${path}`);
  titles.add(title);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(new URL(canonical).href, new URL(path, 'https://feji.fi').href, `canonical: ${path}`);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `single h1: ${path}`);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(json);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    if (href.startsWith('#')) assert.ok(html.includes(`id="${href.slice(1)}"`), `anchor ${href} on ${path}`);
  }
  assert.ok(!html.includes('chunks/link-'), `no broken Link runtime: ${path}`);
  console.log(`PASS ${path}: title, canonical, description, h1, JSON-LD, anchors`);
}
for (const path of ['/missing-page', '/orka/missing-document', '/missing/privacy']) {
  assert.equal((await fetch(base + path)).status, 404, path);
}
for (const path of ['/privacy', '/terms']) {
  const res = await fetch(base + path, {redirect:'manual'});
  assert.equal(res.status, 308);
  assert.ok(res.headers.get('location')?.endsWith('/styrka' + path));
}
const sitemap = await (await fetch(base + '/sitemap.xml')).text();
for (const path of paths) assert.ok(sitemap.includes(`<loc>https://feji.fi${path}</loc>`), `sitemap ${path}`);
assert.ok(!sitemap.includes('<lastmod>'), 'no artificial modification dates');
const robots = await (await fetch(base + '/robots.txt')).text();
assert.match(robots, /Sitemap: https:\/\/feji.fi\/sitemap.xml/);
const image = await fetch(base + '/opengraph-image');
assert.equal(image.status, 200, 'existing social image');
assert.match(image.headers.get('content-type'), /image\//);
console.log('PASS 404s, legacy redirects, sitemap, robots and existing social image');
