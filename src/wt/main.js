import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";
import { cpus } from "os";

const performCalculations = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = dirname(__fileName);
  const filePath = join(__dirname, "worker.js");

  const numCores = cpus().length;
  const workers = [];

  const createWorker = (workerData) =>
    new Promise((resolve, reject) => {
      const worker = new Worker(filePath, { workerData });

      worker.on("message", (data) =>
        resolve({ status: "resolved", data: data })
      );
      worker.on("error", () => resolve({ status: "error", data: null }));
    });

  for (let i = 0; i < numCores; i++) {
    workers.push(createWorker(10 + i));
  }

  const result = await Promise.all(workers);
  console.log(result);
};
await performCalculations();
