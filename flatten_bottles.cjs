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
        // Flatten onto a white background to replace all transparency with white
        .flatten({ background: '#ffffff' })
        .toFile(tempPath);
        
      fs.renameSync(tempPath, filePath);
      console.log(`Saved ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

processImages();
