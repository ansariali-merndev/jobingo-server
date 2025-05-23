import mongoose from "mongoose";

const SavedJobSchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  job_id: {
    type: String,
    required: true,
  },
});

export const SavedJobModal = mongoose.model("SavedJob", SavedJobSchema);
