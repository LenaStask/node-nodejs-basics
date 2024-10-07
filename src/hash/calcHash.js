import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createReadStream } from "node:fs";

const calculateHash = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

  const rs = createReadStream(filePath);

  const hash = crypto.createHash("SHA256");

  rs.pipe(hash).on("finish", () => console.log(hash.digest("hex")));
};

await calculateHash();
