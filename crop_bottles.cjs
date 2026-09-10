const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/images');
const files = fs.readdirSync(dir).filter(f => f.startsWith('wine_') || f.startsWith('huile_'));

async function processImages() {
  for (const file of files) {
    if (!file.endsWith('.png')) continue;
    
    const filePath = path.join(dir, file);
    try {
      console.log(`Processing ${file}...`);
      const image = await Jimp.read(filePath);
      
      // Auto-crop transparency
      image.autocrop();
      
      // Resize to fixed height of 800, keep aspect ratio
      image.resize(Jimp.AUTO, 800);
      
      // Create a 400x900 transparent canvas
      const canvas = new Jimp(400, 900, 0x00000000);
      
      // Center the image in the canvas
      const x = (400 - image.bitmap.width) / 2;
      const y = (900 - image.bitmap.height) / 2;
      
      canvas.composite(image, x, y);
      
      // Overwrite the original file
      await canvas.writeAsync(filePath);
      console.log(`Saved ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

processImages();
