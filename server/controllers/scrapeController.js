
import { SITE_LIST } from "../../shared/constants/sites.js";

import { scrapeQueue } from "../queues/scrapeQueue.js";

export const startScraping = async (req, res, next) => {
  try {
    const { site } = req.body;

    await scrapeQueue.add("scrape-job", { site });

    res.json({ message: `Scraping started for ${site}` });
  } catch (err) {
    next(err);
  }
};