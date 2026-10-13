const urls = [
  'https://islehacks.com/blog/features/',
  'https://islehacks.com/intel/',
  'https://islehacks.com/blog/setup/',
  'https://islehacks.com/howto/',
];

for (const url of urls) {
  const html = await fetch(url).then((r) => r.text());
  const canon = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1];
  console.log(canon, '|', title?.slice(0, 50));
}
