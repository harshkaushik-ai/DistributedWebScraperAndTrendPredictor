import { SITES } from "../../shared/constants/sites.js";
import { formatProduct } from "../../shared/helpers/formatProduct.js";

import { scrapeAmazon } from "../scrapers/amazonScraper.js";
import { scrapeFlipkart } from "../scrapers/flipkartScraper.js";
import { scrapeTwitter } from "../scrapers/twitterScraper.js";
import { scrapeNews } from "../scrapers/newsScraper.js";
import { saveProducts } from "../services/saveService.js";

export const processScrapeJob = async (job) => {
  const { site } = job.data;

  let data = [];

  if (site === "amazon") data = await scrapeAmazon();
  else if (site === "flipkart") data = await scrapeFlipkart();
  else if (site === "twitter") data = await scrapeTwitter();
  else if (site === "news") data = await scrapeNews();

  await saveProducts(data);

  return { success: true };
};