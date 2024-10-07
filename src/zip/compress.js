import zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const sourceFilePath = join(__dirname, "files", "fileToCompress.txt");
  const destinationFilePath = join(__dirname, "files", "archive.gz");

  const rs = createReadStream(sourceFilePath);
  const ws = createWriteStream(destinationFilePath);

  await pipeline(rs, zlib.createGzip(), ws);
};

await compress();
