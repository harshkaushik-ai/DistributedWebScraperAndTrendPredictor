import Trend from "../models/trend.js";

export const updateTrend = async (keyword, mentions, growthRate, prediction) => {
  await Trend.findOneAndUpdate(
    { keyword },
    { mentions, growthRate, prediction, updatedAt: new Date() },
    { upsert: true }
  );
};