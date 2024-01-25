import fs from 'fs';

const create = async () => {
  const fresh = 'src/fs/files/fresh.txt';
  const text = 'I am fresh and young';
  const textError = 'FS operation failed';

  if (fs.existsSync(fresh)) {
    throw new Error(textError);
  } else {
    fs.writeFileSync(fresh, text);
  }
};

await create();
