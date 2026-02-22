import { launchBrowser } from "../utils/browser.js";

export const scrapeAmazon = async () => {
  const browser = await launchBrowser();
  const page = await browser.newPage();

  await page.goto("https://www.amazon.in/s?k=mobile");

  const products = await page.evaluate(() => {
    const items = document.querySelectorAll(".s-result-item");

    return Array.from(items).slice(0, 5).map((item) => ({
      name: item.querySelector("h2 span")?.innerText || "",
      price:
        item.querySelector(".a-price-whole")?.innerText?.replace(",", "") || 0,
      source: "Amazon",
    }));
  });

  await browser.close();
  return products;
};