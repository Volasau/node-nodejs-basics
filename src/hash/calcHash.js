import fs from 'fs';
import crypto from 'crypto';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const readFile = fs.createReadStream(file);
  const hash = crypto.createHash('sha256');
  readFile.on('data', (chunk) => {
    hash.update(chunk);
  });
  readFile.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
