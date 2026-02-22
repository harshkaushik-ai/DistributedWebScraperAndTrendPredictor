import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  source: String,
  scrapedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

export const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/trend_predictor");
};

export const saveProducts = async (products) => {
  await Product.insertMany(products);
};