import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { pipeline } from "node:stream/promises";

const write = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const filePath = join(__dirname, "files", "fileToWrite.txt");

  const ws = fs.createWriteStream(filePath, { flags: "a" });

  await pipeline(process.stdin, ws);
};

await write();
