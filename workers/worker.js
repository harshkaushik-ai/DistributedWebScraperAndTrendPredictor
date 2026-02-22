import { Worker } from "bullmq";
import IORedis from "ioredis";
import { processScrapeJob } from "./processors/scrapeProcessor.js";
import { connectDB } from "./services/saveService.js";

const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
});

await connectDB();

const worker = new Worker(
  "scrapeQueue",
  async (job) => {
    console.log("Processing job:", job.data);
    return await processScrapeJob(job);
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`❌ Job ${job.id} failed:`, err);
});