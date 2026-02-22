import { Queue } from "bullmq";
import connection from "../config/redis.js";

export const scrapeQueue = new Queue("scrapeQueue", {
  connection,
});