import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processPhotos() {
  const input = path.resolve(__dirname, '../public/images/jaydeb-jana-ceo.jpg');
  const outDir = path.resolve(__dirname, '../public/images');

  // 1. Executive Headshot / Avatar (Square 1:1, centered on face)
  await sharp(input)
    .extract({ left: 240, top: 40, width: 340, height: 340 })
    .resize(400, 400, { fit: 'cover' })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .sharpen()
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'jaydeb-jana-avatar.jpg'));

  console.log('✅ Generated jaydeb-jana-avatar.jpg (1:1 Headshot Avatar)');

  // 2. Executive Bust Portrait (4:5 ratio, head to waist)
  await sharp(input)
    .extract({ left: 160, top: 30, width: 480, height: 600 })
    .resize(600, 750, { fit: 'cover' })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .sharpen()
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'jaydeb-jana-portrait.jpg'));

  console.log('✅ Generated jaydeb-jana-portrait.jpg (4:5 Executive Bust Portrait)');

  // 3. Cinematic Warm Executive Edit
  await sharp(path.join(outDir, 'jaydeb-jana-portrait.jpg'))
    .tint({ r: 255, g: 248, b: 240 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'jaydeb-jana-editorial.jpg'));

  console.log('✅ Generated jaydeb-jana-editorial.jpg (Cinematic Warm Tone)');

  // 4. Black & White Executive Edition (For Quotes & Press)
  await sharp(path.join(outDir, 'jaydeb-jana-avatar.jpg'))
    .grayscale()
    .linear(1.15, -15)
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'jaydeb-jana-bw.jpg'));

  console.log('✅ Generated jaydeb-jana-bw.jpg (Executive Black & White)');
}

processPhotos().catch(console.error);
