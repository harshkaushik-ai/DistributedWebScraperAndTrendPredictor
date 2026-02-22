import express from "express";
import { startScraping } from "../controllers/scrapeController.js";

const router = express.Router();

router.post("/start", startScraping);

export default router;