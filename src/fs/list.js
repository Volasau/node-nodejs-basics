import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const textError = 'FS operation failed';

const list = async () => {
  const files = path.join(__dirname, 'files');
  try {
    await fs.access(files, constants.F_OK);
    const filesList = await fs.readdir(files);
    console.log(filesList);
  } catch {
    throw new Error(textError);
  }
};

await list();
