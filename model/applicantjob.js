import mongoose from "mongoose";

const applicantSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Active",
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

export const ApplicantsModel = mongoose.model("Applicants", applicantSchema);
