# Mangpahang Unisex Salon

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Search Engine Submission

Google, Bing, and Brave discover pages differently. After each production deploy:

1. Confirm these URLs are live:
   - `https://mangpahang.com.np/robots.txt`
   - `https://mangpahang.com.np/sitemap.xml`
   - `https://mangpahang.com.np/6f2b8e9c4a7d4f10b1e6a2c9d5f30871.txt`
2. In Bing Webmaster Tools, verify `https://mangpahang.com.np/` and submit `https://mangpahang.com.np/sitemap.xml`.
3. Run `npm run seo:submit-indexnow` after the deploy is live to notify Bing and other IndexNow search engines about the main URLs.

Brave Search uses its own independent index and does not currently offer the same webmaster submission workflow as Google or Bing, so the best signals for Brave are crawlable pages, a public sitemap, consistent business citations, and links from trusted profiles such as Facebook, Instagram, and Google Business Profile.
