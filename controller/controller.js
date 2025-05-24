import { PostJobModal } from "../model/postJob.js";
import { SavedJobModal } from "../model/savedJob.js";
import { ApplicantsModel } from "../model/applicantjob.js";

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

export const getJobById = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await PostJobModal.findOne({ _id: id.id });
    res.json({
      message: "success",
      job: data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
    });
  }
};

export const IncrementApplicants = async (req, res) => {
  const { id } = req.body;
  try {
    await PostJobModal.findByIdAndUpdate(
      id.id,
      { $inc: { appilcants: 1 } },
      { new: true }
    );
    res.json({
      message: "success",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const applyJob = async (req, res) => {
  const { title, jobId, description, location, company, userEmail } = req.body;
  try {
    const checkUser = await ApplicantsModel.findOne({ userEmail, jobId });
    if (checkUser) {
      return res.json({
        message: "warn",
      });
    }
    await ApplicantsModel.create({
      title,
      jobId,
      description,
      location,
      company,
      userEmail,
    });
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

export const getApplicantsByUser = async (req, res) => {
  const { userEmail } = req.body;
  try {
    const data = await ApplicantsModel.find({ userEmail });
    res.json({
      message: "success",
      jobs: data,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
