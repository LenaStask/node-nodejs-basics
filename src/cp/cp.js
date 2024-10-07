import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const scriptFilePath = join(__dirname, "files", "script.js");

  const cp = fork(scriptFilePath, args);

  cp.on("message", (message) => console.log(message));
  cp.on("exit", (code) => console.log(code));
};

spawnChildProcess([1, 2, 3]);
