import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const read = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const filePath = join(__dirname, "files", "fileToRead.txt");

  try {
    const content = await fs.readFile(filePath, { encoding: "utf8" });
    console.log(content);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
