import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const textError = 'FS operation failed';

const remove = async () => {
  const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.access(fileToRemove, constants.F_OK);
    await fs.unlink(fileToRemove);
  } catch {
    throw new Error(textError);
  }
};

await remove();
