import fs from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourceFolderPath = join(__dirname, "files");
  const distinationFolderPath = join(__dirname, "files_copy");

  try {
    const copyFolderExists = await fs
      .stat(distinationFolderPath)
      .catch(() => false);
    if (copyFolderExists) {
      throw new Error("FS operation failed");
    }

    fs.cp(
      sourceFolderPath,
      distinationFolderPath,
      { recursive: true },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

await copy();
