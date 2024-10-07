import { env } from "node:process";

const parseEnv = () => {
  const result = Object.entries(env)
    .reduce((total, [key, value]) => {
      if (key.startsWith("RSS_")) {
        const changedElement = `${key}=${value}`;
        total.push(changedElement);
      }
      return total;
    }, [])
    .join(", ");

  console.log(result);
};

parseEnv();
