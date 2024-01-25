import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const textError = 'FS operation failed';

const read = async () => {
  const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    await fs.access(fileToRead, constants.F_OK);
    const textFile = await fs.readFile(fileToRead, {
      encoding: 'utf8',
      flag: 'r',
    });
    console.log(textFile);
  } catch {
    throw new Error(textError);
  }
};

await read();
