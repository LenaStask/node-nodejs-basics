import fs from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const CONTENT = "I am fresh and young";

const create = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const folderPath = join(__dirname, "files");
  const filePath = join(folderPath, "fresh.txt");
  try {
    await fs.writeFile(filePath, CONTENT, { flag: "wx" });
  } catch (err) {
    console.log(err);
    throw Error("FS operation failed");
  }
};

await create();
