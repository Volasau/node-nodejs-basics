import os from 'os';
import { Worker } from 'worker_threads';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const fileWorker = path.join(__dirname, 'worker.js');

const workerPromise = (n) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(fileWorker, { workerData: n });

    worker.on('message', (data) => {
      resolve({ status: 'resolved', data });
    });
    worker.on('error', (error) => {
      reject({ status: 'error', data: null });
    });
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`${code}`));
      }
    });
  });
};

const performCalculations = async () => {
  const numberCore = os.cpus().length;
  const arr = [];
  for (let i = 0; i < numberCore; i++) {
    arr.push(workerPromise(10 + i));
  }
  const results = await Promise.all(arr);
  console.log(results);
};

await performCalculations();
