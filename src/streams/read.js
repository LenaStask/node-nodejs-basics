import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { pipeline } from "node:stream/promises";

const read = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const filePath = join(__dirname, "files", "fileToRead.txt");

  const rs = fs.createReadStream(filePath);

  await pipeline(rs, process.stdout);
};

await read();
