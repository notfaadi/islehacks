const url = process.argv[2] || 'https://islehack.net/';
const html = await fetch(url).then((r) => r.text());
for (const re of [
  /rel="canonical" href="([^"]+)"/,
  /rel="alternate" hreflang="en" href="([^"]+)"/,
  /name="description" content="([^"]+)"/,
  /rel="alternate" type="application\/rss\+xml"[^>]+href="([^"]+)"/,
]) {
  const m = html.match(re);
  console.log(re.source.slice(0, 40) + '…', m ? m[1] : '(missing)');
}
