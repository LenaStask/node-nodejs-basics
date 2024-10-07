import zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const sourceFilePath = join(__dirname, "files", "fileToCompress.txt");
  const archivedFilePath = join(__dirname, "files", "archive.gz");

  const rs = createReadStream(archivedFilePath);
  const ws = createWriteStream(sourceFilePath);

  await pipeline(rs, zlib.createGunzip(), ws);
};

await decompress();
