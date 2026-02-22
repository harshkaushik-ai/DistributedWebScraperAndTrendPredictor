import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
    unique: true,
  },
  site: {
    type: String, // amazon, flipkart, twitter
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "completed", "failed"],
    default: "pending",
  },
  startedAt: Date,
  completedAt: Date,
  errorMessage: String,
});

export default mongoose.model("Job", jobSchema);