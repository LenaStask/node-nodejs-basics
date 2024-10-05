import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const remove = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const deleteFilePAth = join(folderPath, "files", "fileToRemove.txt");

  try {
    await fs.rm(deleteFilePAth);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
