import Trend from "../models/trend.js";

export const getTrends = async (req, res, next) => {
  try {
    const trends = await Trend.find().sort({ updatedAt: -1 });
    res.json(trends);
  } catch (err) {
    next(err);
  }
};