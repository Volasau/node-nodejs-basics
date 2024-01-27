import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const file = path.join(__dirname, 'files', 'archive.gz');
  const fileZip = path.join(__dirname, 'files', 'fileToCompress.txt');
  const gzip = zlib.createGunzip();
  const readFile = fs.createReadStream(file);
  const writeZip = fs.createWriteStream(fileZip);

  pipeline(readFile, gzip, writeZip, (err) => {
    if (err) {
      console.error('Operation failed:', err);
    }
  });
};

await decompress();
