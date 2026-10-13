import { resolveCheckoutPathRedirect } from '../src/config/checkout-redirects.mjs';

const CANONICAL_HOST = 'islehacks.org';
const FILE_ASSETS = new Set([
  '/sitemap.xml',
  '/sitemap-index.xml',
  '/sitemap-0.xml',
  '/robots.txt',
  '/rss.xml',
  '/og.jpg',
  '/opengraph.jpg',
  '/favicon.ico',
  '/favicon.svg',
  '/site.webmanifest',
]);

const XML_FILES = new Set(['/sitemap.xml', '/sitemap-index.xml', '/sitemap-0.xml', '/rss.xml']);
const COVER_PATHS = new Set([
  '/opengraph.jpg',
  '/og.jpg',
  '/images/gameplay/isle-forest-esp.png',
]);
const COVER_ASSET = '/opengraph.jpg';

function isImmutableAsset(pathname) {
  return (
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/images/') ||
    /\.(?:webp|png|svg|js|css|ico|woff2?)$/i.test(pathname)
  );
}

function applyAssetHeaders(pathname, headers) {
  const contentType = headers.get('content-type') ?? '';

  if (XML_FILES.has(pathname)) {
    headers.set('content-type', 'application/xml; charset=utf-8');
    headers.set('x-content-type-options', 'nosniff');
    headers.set('cache-control', 'public, max-age=3600, must-revalidate');
    return;
  }

  if (pathname === '/robots.txt') {
    headers.set('content-type', 'text/plain; charset=utf-8');
    headers.set('cache-control', 'public, max-age=3600, must-revalidate');
    return;
  }

  if (contentType.toLowerCase().startsWith('text/html') && !/charset=/i.test(contentType)) {
    headers.set('content-type', 'text/html; charset=utf-8');
  }

  if (isImmutableAsset(pathname)) {
    headers.set('cache-control', 'public, max-age=31536000, immutable');
  } else if (pathname === '/site.webmanifest') {
    headers.set('cache-control', 'public, max-age=86400');
  }
}

async function serveExactAsset(env, request, pathname, contentType) {
  const asset = await env.ASSETS.fetch(new Request(`https://assets.local${pathname}`, { method: 'GET' }));
  const body = await asset.text();
  const bytes = new TextEncoder().encode(body);
  const headers = new Headers({
    'content-type': contentType,
    'content-length': String(bytes.length),
    'cache-control': 'public, max-age=3600, must-revalidate',
  });

  if (XML_FILES.has(pathname)) {
    headers.set('x-content-type-options', 'nosniff');
  }

  if (request.method === 'HEAD') {
    return new Response(null, { status: asset.ok ? 200 : asset.status, headers });
  }

  return new Response(body, { status: asset.ok ? 200 : asset.status, headers });
}

async function serveCover(env, request) {
  const asset = await env.ASSETS.fetch(new Request(`https://assets.local${COVER_ASSET}`, { method: 'GET' }));
  const body = await asset.arrayBuffer();
  const headers = new Headers({
    'content-type': 'image/jpeg',
    'content-length': String(body.byteLength),
    'cache-control': 'public, max-age=86400',
    'access-control-allow-origin': '*',
    'x-content-type-options': 'nosniff',
  });

  if (request.method === 'HEAD' || request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  return new Response(body, { status: 200, headers });
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      if (url.hostname === `www.${CANONICAL_HOST}` || url.hostname.startsWith('www.')) {
        url.hostname = CANONICAL_HOST;
        url.protocol = 'https:';
        return Response.redirect(url.href, 301);
      }

      if (url.protocol === 'http:') {
        url.protocol = 'https:';
        return Response.redirect(url.href, 301);
      }

      if (url.pathname.endsWith('/') && FILE_ASSETS.has(url.pathname.slice(0, -1))) {
        url.pathname = url.pathname.slice(0, -1);
        return Response.redirect(url.href, 301);
      }

      if (XML_FILES.has(url.pathname)) {
        return serveExactAsset(env, request, url.pathname, 'application/xml; charset=utf-8');
      }

      if (url.pathname === '/robots.txt') {
        return serveExactAsset(env, request, url.pathname, 'text/plain; charset=utf-8');
      }

      if (COVER_PATHS.has(url.pathname)) {
        return serveCover(env, request);
      }

      const checkout = resolveCheckoutPathRedirect(url.pathname);
      if (checkout) {
        return Response.redirect(checkout, 302);
      }

      const response = await env.ASSETS.fetch(request);
      const headers = new Headers(response.headers);
      applyAssetHeaders(url.pathname, headers);

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    } catch {
      return new Response('Not found', {
        status: 404,
        headers: { 'content-type': 'text/plain; charset=utf-8' },
      });
    }
  },
};
