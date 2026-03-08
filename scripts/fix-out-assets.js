const fs = require('fs');
const path = require('path');

// Directory to process
const outDir = path.join(__dirname, '..', 'out');
const repoBase = '/web'; // must match next.config.basePath

function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.html', '.css', '.js'].includes(ext)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Avoid double-prefixing
  content = content.replace(/(href=|src=|url\(|"|')\/assets\//g, (m) => {
    // m may include the prefix token; reconstruct properly
    if (m.endsWith("/assets/")) {
      // token like "'/assets/ or "src="/assets/
      const prefix = m.slice(0, m.length - '/assets/'.length);
      return prefix + repoBase + '/assets/';
    }
    // fallback
    return m;
  });

  // Also replace standalone /assets/ occurrences (less safe but helpful)
  content = content.replace(/\/(assets\/[^")'\s>]+)/g, repoBase + '/$1');

  // Replace relative references like src="assets/... or href='assets/ or url(assets/... -> add leading repoBase
  content = content.replace(/(src=\"|src=')(assets\/[^")']+)/g, (m, p1, p2) => {
    return p1 + repoBase + '/' + p2;
  });
  content = content.replace(/(href=\"|href=')(assets\/[^")']+)/g, (m, p1, p2) => {
    return p1 + repoBase + '/' + p2;
  });
  content = content.replace(/url\((assets\/[^)]+)\)/g, (m, p1) => {
    return 'url(' + repoBase + '/' + p1 + ')';
  });

  // Also handle JS/JSON style keys like src:"assets/..." or src: 'assets/...' or src: assets/...
  content = content.replace(/([:=]\s*["']?)(assets\/[^")'\s,}]+)/g, (m, p1, p2) => {
    return p1 + repoBase + '/' + p2;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else processFile(full);
  }
}

if (!fs.existsSync(outDir)) {
  console.error('out/ directory not found. Run `npm run build` first.');
  process.exit(1);
}

console.log('Processing out/ to prefix /assets -> ' + repoBase + '/assets ...');
walk(outDir);
// Final cleanup: avoid accidentally double-prefixing (e.g. /web/web/assets -> /web/assets)
function dedupe(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) dedupe(full);
    else {
      const ext = path.extname(full).toLowerCase();
      if (!['.html', '.css', '.js'].includes(ext)) continue;
      let c = fs.readFileSync(full, 'utf8');
      const before = c;
      c = c.replace(/\/web\/web\//g, '/web/');
        // also replace /web/web/assets (no extra slash)
        c = c.replace(/\/web\/web\/assets/g, '/web/assets');
        c = c.replace(/\/web\/web/g, '/web');
      if (c !== before) fs.writeFileSync(full, c, 'utf8');
    }
  }
}

dedupe(outDir);

console.log('Done.');
