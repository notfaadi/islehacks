# Deploy islehack.net (Cloudflare Worker + static assets)

Live traffic uses the **`islehacks`** Worker (custom domain `islehack.net` / `www.islehack.net`).

## Local or CI deploy

```bash
npm ci
npm run build
npm run deploy
```

For **local** `wrangler deploy`, authenticate with `wrangler login` or set `CLOUDFLARE_ACCOUNT_ID` (Workers Builds sets this automatically; do not hardcode `account_id` in `wrangler.jsonc`).

## Cloudflare Workers Builds (Git)

The Worker serves static files from **`dist/`** (Astro `npm run build`). Wrangler deploy alone will fail if `dist` was not created first.

In **Workers & Pages → your Worker → Settings → Builds**, use **one** of these setups:

| Approach | Build command | Deploy command |
|----------|---------------|----------------|
| **Recommended** | *(leave empty)* | `npm run deploy` |
| Two-step | `npm run build` | `npx wrangler deploy` |

Set **Node** to **22.12+** (see `.node-version`).

`wrangler.jsonc` sets `"build": { "command": "npm run build" }` so **`npx wrangler deploy`** still creates `dist/` before assets upload (no separate Cloudflare build step required).

## Cloudflare Pages (Git builds)

If the Pages project uses a **Deploy command**, set:

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |
| Node | 22.12+ (see `.node-version`) |

Add an encrypted environment variable on the Pages project:

- **`CLOUDFLARE_API_TOKEN`** — API token with **Workers Scripts → Edit** for the account that owns the `islehacks` Worker and `islehack.net` zone.

Do **not** put absolute URLs in `public/_redirects` (Workers assets only allow relative paths). WWW and HTTP→HTTPS 301s are handled by Cloudflare zone redirect rules and `workers/seo-edge.js`.
