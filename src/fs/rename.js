import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const textError = 'FS operation failed';

const rename = async () => {
  const wrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
  const properFilename = path.join(__dirname, 'files', 'properFilename.md');
  try {
    await fs.rename(wrongFile, properFilename);
  } catch {
    throw new Error(textError);
  }
};

await rename();
