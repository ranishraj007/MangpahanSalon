# Mangpahang Unisex Salon

React and Vite website for Mangpahang Unisex Salon in Mid-Baneshwor, Kathmandu.

## Development and validation

```sh
yarn dev
yarn build
yarn seo:check
yarn lint
yarn preview
```

`yarn build` builds the browser assets, renders each public route to HTML with its own metadata, generates `dist/sitemap.xml`, and creates `dist/404.html`. The temporary server bundle is removed afterward; production hosting only needs the static `dist` directory. No server runtime or new dependency is required.

`yarn seo:check` checks the generated pages for unique titles, canonical URLs, structured data, breadcrumbs, internal links, asset references, pricing/FAQ content, sitemap coverage, and error-page indexing directives. Run it after building.

Vite's development and preview servers do not reproduce every Vercel routing rule. Check HTTP statuses and redirects on the deployed site as described below.

## Content and SEO maintenance

- `src/data/routes.js` defines indexable routes and the four dedicated service pages. The build and IndexNow use this same list. Add new routes to the React router as well when introducing a new page type.
- `src/data/services.js` contains the existing service descriptions and prices shared by the service menu and detail pages. Confirm price changes with the salon before editing.
- `src/data/business.json` contains the shared HairSalon entity. Schema references use `https://mangpahang.com.np/#salon`.
- `src/components/SEO.jsx` owns page metadata and structured data. Keep route-specific metadata out of `index.html`, which is the build template.
- Pricing and contact FAQs use native `details`/`summary` elements, so their content is present in the generated HTML and the panels work without JavaScript.
- Initial content is visible before hydration. The homepage hero image is preloaded in its generated HTML.
- The sitemap is generated, not stored in `public`. It deliberately omits `lastmod` until reliable per-page content modification dates are available; do not substitute build timestamps.

## Deployment checks

Deploy using the package's build command and the `dist` output directory. The Vercel configuration serves clean URLs, removes trailing slashes, and permanently redirects the www hostname to the non-www hostname. Unknown URLs use the generated 404 document instead of the previous blanket index.html rewrite.

After deployment, verify:

1. `/services` and all four `/services/...` pages return `200` and include content in View Source.
2. An invented URL returns HTTP `404`, shows the custom error page, contains `noindex`, and has no canonical link.
3. The www hostname and trailing-slash variants permanently redirect to the chosen URLs. If the existing Vercel **Domains** setting still redirects www with `307`, change that dashboard redirect to permanent or assign www to this deployment so the repository rule can handle it. Domain-level settings cannot be changed by this repository.
4. `robots.txt`, `sitemap.xml`, and `/6f2b8e9c4a7d4f10b1e6a2c9d5f30871.txt` remain accessible.
5. Inspect representative URLs in Google Search Console and Bing Webmaster Tools; check mobile Core Web Vitals after enough real visits have accumulated.

Run `yarn seo:submit-indexnow` only after the deployment is live. It submits the current public route list to IndexNow.

Business-profile verification, business-directory corrections, review requests and backlink outreach require the salon's external accounts. They are not performed by the build or these scripts.
