import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const rename = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const folderPath = join(__dirname, "files");
  const wrongFilePath = join(folderPath, "wrongFilename.txt");
  const properFilePath = join(folderPath, "properFilename.md");

  try {
    await fs.rename(wrongFilePath, properFilePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
