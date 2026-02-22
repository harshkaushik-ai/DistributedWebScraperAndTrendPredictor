import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  source: {
    type: String, // Amazon, Flipkart, etc.
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  productUrl: String,
  scrapedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);