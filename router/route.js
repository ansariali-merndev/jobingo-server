import { Router } from "express";
import { addJob, getHome } from "../controller/controller.js";
import { PostJobModal } from "../model/postJob.js";

export const router = Router();

router.get("/", getHome);
router.get("/get-job", async (req, res) => {
  const data = await PostJobModal.find();
  res.json({
    message: "success",
    data,
  });
});
router.post("/add-job", addJob);
