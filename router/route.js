import { Router } from "express";
import {
  addJob,
  getAllJob,
  getHome,
  getJobById,
  getSavedJob,
  IncrementApplicants,
  SavedJob,
} from "../controller/controller.js";

export const router = Router();

router.get("/", getHome);
router.get("/get-job", getAllJob);
router.post("/add-job", addJob);
router.post("/saved-job", SavedJob);
router.post("/getSavedJobByEmail", getSavedJob);
router.post("/getJobById", getJobById);
router.post("/incr", IncrementApplicants);
