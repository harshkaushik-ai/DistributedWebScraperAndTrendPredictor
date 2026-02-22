import express from "express";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js";
import trendRoutes from "./routes/trendRoutes.js";
import scrapeRoutes from "./routes/scrapeRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/trends", trendRoutes);
app.use("/api/scrape", scrapeRoutes);

app.use(errorHandler);

export default app;