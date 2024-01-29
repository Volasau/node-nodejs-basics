import { Transform } from 'stream';

const transform = async () => {
  const transformText = new Transform({
    transform(chunk, encoding, callback) {
      const reversText = chunk.toString().split('').reverse().join('');
      this.push(reversText + '\n');
      callback();
    },
  });
  process.stdin.pipe(transformText).pipe(process.stdout);
};

await transform();
