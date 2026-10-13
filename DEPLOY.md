# Deploy islehack.net (Cloudflare Worker + static assets)

Live traffic uses the **`islehacks`** Worker (custom domain `islehack.net` / `www.islehack.net`).

## Local or CI deploy

```bash
npm ci
npm run build
npm run deploy
```

`wrangler.jsonc` includes `account_id` for non-interactive deploys.

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
