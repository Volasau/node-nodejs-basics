const parseEnv = () => {
  const variables = Object.entries(process.env)
    .filter(([key]) => key.includes('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(variables);
};

parseEnv();
