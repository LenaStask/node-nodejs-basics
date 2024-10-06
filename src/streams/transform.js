import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const ts = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  await pipeline(process.stdin, ts, process.stdout);
};

await transform();
