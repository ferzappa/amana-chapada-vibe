const sharp = require('sharp');
const fs = require('fs/promises');
const path = require('path');

const dir = path.join(__dirname, 'src/assets');
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 80;

async function main() {
  const files = await fs.readdir(dir);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  let totalBefore = 0, totalAfter = 0;

  for (const file of imageFiles) {
    const filepath = path.join(dir, file);
    const ext = path.extname(file).toLowerCase();
    const before = (await fs.stat(filepath)).size;
    totalBefore += before;
    const tmpOut = filepath + '.tmp.jpg';

    try {
      let pipeline = sharp(filepath).resize({ width: MAX_WIDTH, withoutEnlargement: true });
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
      await pipeline.toFile(tmpOut);

      if (ext === '.png') {
        const newPath = filepath.replace(/\.png$/i, '.jpg');
        await fs.unlink(filepath);
        await fs.rename(tmpOut, newPath);
        const after = (await fs.stat(newPath)).size;
        totalAfter += after;
        console.log(file + ' → ' + path.basename(newPath) + ': ' + (before/1024).toFixed(0) + 'KB → ' + (after/1024).toFixed(0) + 'KB');
      } else {
        await fs.unlink(filepath);
        await fs.rename(tmpOut, filepath);
        const after = (await fs.stat(filepath)).size;
        totalAfter += after;
        console.log(file + ': ' + (before/1024).toFixed(0) + 'KB → ' + (after/1024).toFixed(0) + 'KB');
      }
    } catch (e) {
      console.error('Error ' + file + ':', e.message);
    }
  }
  console.log('\nTotal: ' + (totalBefore/1024/1024).toFixed(1) + 'MB → ' + (totalAfter/1024/1024).toFixed(1) + 'MB');
  console.log('Redução: ' + ((1 - totalAfter/totalBefore)*100).toFixed(0) + '%');
}
main();
