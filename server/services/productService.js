import Product from "../models/product.js";

export const saveProducts = async (products) => {
  await Product.insertMany(products);
};