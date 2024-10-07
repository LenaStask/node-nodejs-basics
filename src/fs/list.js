import fs, { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const list = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const folderPath = join(__dirname, "files");

  try {
    const files = await readdir(folderPath);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
