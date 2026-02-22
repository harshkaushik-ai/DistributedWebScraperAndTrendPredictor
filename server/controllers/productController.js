import Product from "../models/product.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ scrapedAt: -1 });
    res.json(products);
  } catch (err) {
    next(err);
  }
};