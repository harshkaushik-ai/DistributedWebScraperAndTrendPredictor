import mongoose from "mongoose";

const trendSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
    index: true,
  },
  mentions: {
    type: Number,
    default: 0,
  },
  growthRate: {
    type: Number,
    default: 0,
  },
  prediction: {
    type: String,
    enum: ["rising", "stable", "falling"],
    default: "stable",
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Trend", trendSchema);