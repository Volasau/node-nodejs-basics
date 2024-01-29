import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const textError = 'FS operation failed';

const copy = async () => {
  const folder = path.join(__dirname, 'files');
  const folderCopy = path.join(__dirname, 'files_copy');
  try {
    const files = await fs.readdir(folder);
    await fs.mkdir(folderCopy, { recursive: false });
    files.forEach(async (file) => {
      const pathOldFile = path.join(folder, file);
      const pathFolderCopy = path.join(folderCopy, file);

      await fs.copyFile(pathOldFile, pathFolderCopy);
    });
  } catch {
    throw new Error(textError);
  }
};

await copy();
