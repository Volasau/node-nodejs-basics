import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const file = path.join(__dirname, 'files', 'fileToRead.txt');
  const readFile = fs.createReadStream(file);
  readFile.pipe(process.stdout);
};

await read();
