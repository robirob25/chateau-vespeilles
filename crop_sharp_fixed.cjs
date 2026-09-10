const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/images');
const files = fs.readdirSync(dir).filter(f => f.startsWith('wine_') || f.startsWith('huile_'));

async function processImages() {
  for (const file of files) {
    if (!file.endsWith('.png')) continue;
    
    const filePath = path.join(dir, file);
    const tempPath = path.join(dir, 'temp_' + file);
    try {
      console.log(`Processing ${file}...`);
      await sharp(filePath)
        // 1. Trim the transparency we just added
        .trim({ threshold: 10 })
        // 2. Trim the underlying white/grey background from the original image (with a high tolerance)
        .trim({ background: { r: 255, g: 255, b: 255, alpha: 1 }, threshold: 100 })
        // 3. Resize and pad perfectly
        .resize({ width: 400, height: 1000, fit: 'contain', background: {r:0, g:0, b:0, alpha:0} })
        .toFile(tempPath);
        
      fs.renameSync(tempPath, filePath);
      console.log(`Saved ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

processImages();
