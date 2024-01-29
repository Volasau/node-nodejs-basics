const parseArgs = () => {
  const args = process.argv;
  let obj = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].includes('--')) {
      obj[args[i].slice(2)] = args[i + 1];
    }
  }
  const result = Object.entries(obj)
    .map(([key, value]) => `${key} is ${value}`)
    .join(', ');

  console.log(result);
};

parseArgs();
