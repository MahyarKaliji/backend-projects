import express from "express";
import lengthController from "../controllers/lengthController.js";

const router = express.Router();

router
  .route("/")
  .get(lengthController.getLength)
  .post(lengthController.postLength);

export default router;
