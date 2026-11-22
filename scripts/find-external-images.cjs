const fs = require('fs');
const path = require('path');

function scanDir(dir, results = []) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    if (['node_modules', '.git', 'dist'].includes(item)) continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full, results);
    } else if (/\.(tsx|ts|html|css|js)$/.test(item)) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/https?:\/\/[^\s"'<>]+\.(jpg|jpeg|png|webp|avif)/gi) || [];
      const ibbMatches = content.match(/https?:\/\/[^\s"'<>]*ibb\.co[^\s"'<>]*/gi) || [];
      const all = Array.from(new Set([...matches, ...ibbMatches]));
      if (all.length > 0) {
        results.push({ file: full, matches: all });
      }
    }
  }
  return results;
}

const found = scanDir('.');
console.log(JSON.stringify(found, null, 2));
