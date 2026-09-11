import { build } from "vite";
import { readFile, writeFile, rm, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { publicRoutes, siteUrl } from "../src/data/routes.js";

await build();
await build({
  build: { ssr: "src/entry-server.jsx", outDir: "dist/.server", copyPublicDir: false },
});
const { render } = await import("../dist/.server/entry-server.js");
const template = await readFile("dist/index.html", "utf8");
for (const route of [...publicRoutes, { path: "/404" }]) {
  const { html, head } = await render(route.path);
  const document = template.replace("<!--seo-head-->", () => head).replace("<!--app-html-->", () => html);
  // cleanUrls serves these as /services, /about, etc. Nested files use directories.
  const file = route.path === "/" ? "index" : route.path.slice(1);
  await mkdir(dirname(`dist/${file}.html`), { recursive: true });
  await writeFile(`dist/${file}.html`, document);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicRoutes.map(({ path }) => `  <url><loc>${siteUrl}${path}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile("dist/sitemap.xml", sitemap);
await rm("dist/.server", { recursive: true });
console.log(`Prerendered ${publicRoutes.length} public pages and the 404 page.`);
