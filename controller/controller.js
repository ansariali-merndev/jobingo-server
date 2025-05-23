import { PostJobModal } from "../model/postJob.js";
import { SavedJobModal } from "../model/savedJob.js";

export const getHome = (req, res) => {
  res.json({
    message: "Hello Express Working",
  });
};

export const addJob = async (req, res) => {
  const {
    recruiterEmail,
    recruiterClerkId,
    title,
    description,
    company,
    location,
    skills,
  } = req.body;
  await PostJobModal.create({
    recruiterEmail,
    recruiterClerkId,
    title,
    description,
    company,
    location,
    skills,
  });
  res.json({
    message: "success",
  });
};

export const getAllJob = async (req, res) => {
  const data = await PostJobModal.find();
  res.json({
    message: "success",
    job: data,
  });
};

export const SavedJob = async (req, res) => {
  const { userEmail, job_id } = req.body;
  try {
    const user = await SavedJobModal.findOne({ userEmail, job_id });
    if (user) {
      await SavedJobModal.deleteOne({ userEmail, job_id });
    } else {
      await SavedJobModal.create({
        userEmail,
        job_id,
      });
    }
    res.json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
    });
  }
};

export const getSavedJob = async (req, res) => {
  const { userEmail } = req.body;
  try {
    const savedJob = await SavedJobModal.find({ userEmail });
    res.json({
      message: "success",
      data: savedJob,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
    });
  }
};
