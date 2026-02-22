import { launchBrowser } from "../utils/browser.js";

export const scrapeFlipkart = async () => {
  const browser = await launchBrowser();
  const page = await browser.newPage();

  await page.goto("https://www.flipkart.com/search?q=mobile");

  const products = await page.evaluate(() => {
    const items = document.querySelectorAll("._1AtVbE");

    return Array.from(items).slice(0, 5).map((item) => ({
      name: item.querySelector("._4rR01T")?.innerText || "",
      price:
        item.querySelector("._30jeq3")?.innerText?.replace("₹", "") || 0,
      source: "Flipkart",
    }));
  });

  await browser.close();
  return products;
};