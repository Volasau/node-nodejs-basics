import fs from 'fs';

const rename = async () => {
  const wrongFile = 'src/fs/files/wrongFilename.txt';
  const properFilename = 'src/fs/files/properFilename.md';

  if (!fs.existsSync(wrongFile) || fs.existsSync(properFilename)) {
    throw new Error('FS operation failed');
  } else {
    fs.renameSync(wrongFile, properFilename);
  }
};

await rename();
