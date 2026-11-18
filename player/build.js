const fs = require('fs');
const path = require('path');

const root = __dirname;
const output = path.join(root, 'dist');
const files = ['index.html', 'video.mp4'];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}

console.log(`Build ok: ${files.join(', ')} -> dist/`);
