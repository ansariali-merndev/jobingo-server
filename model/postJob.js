import mongoose from "mongoose";

const JobPostSchema = mongoose.Schema({
  recruiterEmail: {
    type: String,
    required: true,
  },
  recruiterClerkId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  appilcants: {
    type: Number,
    default: 0,
  },
  skills: {
    type: String,
    required: true,
    trim: true,
  },
});

export const PostJobModal = mongoose.model("JobPost", JobPostSchema);
