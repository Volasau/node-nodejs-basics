import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const textError = 'FS operation failed';

const create = async () => {
  const fresh = path.join(__dirname, 'files', 'fresh.txt');
  const text = 'I am fresh and young';

  try {
    await fs.writeFile(fresh, text, { encoding: 'utf8', flag: 'wx' });
  } catch {
    throw new Error(textError);
  }
};

await create();
