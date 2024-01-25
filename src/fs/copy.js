import fs from 'fs';
import path from 'path';

const copy = async () => {
  const folder = 'src/fs/files';
  const folderCopy = 'src/fs/files_copy';

  if (!fs.existsSync(folder) || fs.existsSync(folderCopy)) {
    throw new Error('FS operation failed');
  } else {
    fs.mkdirSync(folderCopy);
    const allFiles = fs.readdirSync(folder);

    allFiles.forEach((file) => {
      const pathOldFile = path.resolve(folder, file);
      const pathFolderCopy = path.resolve(folderCopy, file);
      fs.copyFileSync(pathOldFile, pathFolderCopy);
    });
  }
};

await copy();
