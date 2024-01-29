import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const file = path.join(__dirname, 'files', 'fileToWrite.txt');
  const readFile = fs.createWriteStream(file);
  process.stdin.pipe(readFile);
};

await write();
