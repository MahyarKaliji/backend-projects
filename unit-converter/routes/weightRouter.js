import express from "express";
import weightController from "../controllers/weightController.js";

const router = express.Router();

router
  .route("/")
  .get(weightController.getWeight)
  .post(weightController.postWeight);

export default router;
