const html = await fetch('https://islehacks.com/what-to-review-before-buying/').then((r) => r.text());
console.log('len', html.length);
console.log('h1', html.match(/<h1[^>]*>([^<]{0,80})/i)?.[1]);
console.log('redirect', html.includes('Redirecting'));
