const html = await fetch('https://islehack.net/').then((r) => r.text());
console.log('canonical:', html.match(/rel="canonical" href="([^"]+)"/)?.[1]);
for (const m of html.matchAll(/rel="alternate"[^>]+>/g)) console.log('alternate:', m[0]);
console.log('description:', html.match(/name="description" content="([^"]*)"/)?.[1]);
