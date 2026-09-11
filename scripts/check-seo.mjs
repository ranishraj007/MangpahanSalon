import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { publicRoutes, servicePages, siteUrl } from "../src/data/routes.js";

const sitemap = await readFile("dist/sitemap.xml", "utf8");
const titles = new Set();
for (const { path } of [...publicRoutes, { path: "/404" }]) {
  const file = path === "/" ? "index" : path.slice(1);
  const html = await readFile(`dist/${file}.html`, "utf8");
  assert(!html.includes("<!--app-html-->"), `${path}: unrendered app`);
  assert(!html.includes("<!--seo-head-->"), `${path}: unrendered metadata`);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: H1`);
  assert.equal((html.match(/<title[\s>]/g) || []).length, 1, `${path}: title`);
  assert.equal((html.match(/name="description"/g) || []).length, 1, `${path}: description`);
  const title = html.match(/<title[^>]*>(.*?)<\/title>/s)[1];
  assert(!titles.has(title), `${path}: duplicate title`);
  titles.add(title);
  if (path === "/404") {
    assert.match(html, /name="robots" content="noindex, follow"/);
    assert(!html.includes('rel="canonical"'));
    assert(!sitemap.includes(`${siteUrl}/404`));
  } else {
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${path}: canonical`);
    assert(html.includes(`rel="canonical" href="${siteUrl}${path}"`), `${path}: wrong canonical`);
    assert(sitemap.includes(`<loc>${siteUrl}${path}</loc>`), `${path}: missing from sitemap`);
    const script = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s);
    assert(script, `${path}: missing schema`);
    const { "@graph": graph } = JSON.parse(script[1]);
    assert.equal(graph.filter((entity) => entity["@type"] === "HairSalon").length, 1);
    assert(graph.some((entity) => entity["@id"] === `${siteUrl}/#salon`));
    if (path !== "/") assert(graph.some((entity) => entity["@type"] === "BreadcrumbList"));
  }
  for (const asset of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
    await access(`dist${asset[1]}`);
  }
  // Internal links must resolve to known public routes, even without JavaScript.
  for (const link of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    if (link[1].startsWith("/assets/") || link[1] === "/Logo.jpg") continue;
    assert(publicRoutes.some((route) => route.path === link[1]), `${path}: broken internal link ${link[1]}`);
  }
}
const services = await readFile("dist/services.html", "utf8");
assert.equal((services.match(/<details[\s>]/g) || []).length, 13);
assert(services.includes("Man Haircut") && services.includes("Full Highlight"), "pricing missing from HTML");
for (const page of servicePages) assert(services.includes(`href="${page.path}"`), `${page.path}: orphan service page`);
const contact = await readFile("dist/contact.html", "utf8");
assert(contact.includes("While we do accept walk-ins"), "FAQ answer missing from HTML");
const home = await readFile("dist/index.html", "utf8");
assert.match(home, /rel="preload" as="image"[^>]+fetchpriority="high"/);
assert.equal((sitemap.match(/<loc>/g) || []).length, publicRoutes.length);
const config = JSON.parse(await readFile("vercel.json", "utf8"));
assert.equal(config.cleanUrls, true);
assert.equal(config.trailingSlash, false);
assert(!config.rewrites?.some((rule) => rule.destination === "/index.html"), "catch-all success rewrite must not return");
console.log(`SEO checks passed for ${publicRoutes.length} public pages and the 404 page.`);
