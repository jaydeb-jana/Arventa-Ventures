const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));

async function compressAll() {
  console.log(`Starting compression for ${files.length} WebP images...`);
  let totalSaved = 0;
  let optimizedCount = 0;

  for (const f of files) {
    const p = path.join(dir, f);
    try {
      const origBuf = fs.readFileSync(p);
      const origSize = origBuf.length;

      // High-quality visually lossless compression
      const newBuf = await sharp(origBuf)
        .webp({
          quality: 78,
          effort: 6,
          smartSubsample: true,
        })
        .toBuffer();

      if (newBuf.length < origSize) {
        fs.writeFileSync(p, newBuf);
        const saved = origSize - newBuf.length;
        totalSaved += saved;
        optimizedCount++;
        const pct = ((saved / origSize) * 100).toFixed(1);
        console.log(`[OK] ${f.padEnd(38)} ${(origSize/1024).toFixed(1)}KB -> ${(newBuf.length/1024).toFixed(1)}KB (-${pct}%)`);
      } else {
        console.log(`[SKIP] ${f.padEnd(36)} already optimally compressed`);
      }
    } catch (err) {
      console.error(`[ERR] ${f}:`, err.message);
    }
  }

  console.log('--------------------------------------------------');
  console.log(`Total images optimized: ${optimizedCount} / ${files.length}`);
  console.log(`Total storage saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB (${(totalSaved / 1024).toFixed(1)} KB)`);
}

compressAll();
