const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = path.resolve('C:/Users/lapto/.gemini/antigravity/brain/d2a88c45-472a-4278-a15c-22577baabca6');
const subagentBrainDir = path.resolve('C:/Users/lapto/.gemini/antigravity/brain/1163cc23-14c0-4ddd-b55c-b83ed0393a25');
const publicImagesDir = path.resolve('public/images');

async function processImage(sourceFile, targetFile) {
  if (!fs.existsSync(sourceFile)) {
    console.log(`Source not found: ${sourceFile}`);
    return false;
  }
  await sharp(sourceFile)
    .webp({ quality: 85 })
    .toFile(targetFile);
  console.log(`Converted: ${path.basename(sourceFile)} -> ${path.basename(targetFile)}`);
  return true;
}

async function run() {
  console.log("Checking for generated images...");
  const files = [
    { src: 'contai_arventa_studio_production', target: 'contai-arventa-studio.webp' },
    { src: 'contai_executive_consultation', target: 'contai-executive-consultation.webp' },
    { src: 'contai_command_center_warroom', target: 'contai-command-center.webp' },
  ];

  for (const item of files) {
    // Check both brain directory and subagent brain directory
    let foundPath = null;
    const dirsToCheck = [brainDir, subagentBrainDir];
    
    for (const d of dirsToCheck) {
      if (fs.existsSync(d)) {
        const dirFiles = fs.readdirSync(d);
        for (const f of dirFiles) {
          if (f.toLowerCase().includes(item.src.toLowerCase()) && (f.endsWith('.jpg') || f.endsWith('.png'))) {
            foundPath = path.join(d, f);
            break;
          }
        }
      }
      if (foundPath) break;
    }

    if (foundPath) {
      const targetPath = path.join(publicImagesDir, item.target);
      await processImage(foundPath, targetPath);
    } else {
      console.log(`Pending: ${item.src}`);
    }
  }
}

run().catch(console.error);
