import express from "express";
import temperatureController from "../controllers/temperatureController.js";

const router = express.Router();

router
  .route("/")
  .get(temperatureController.getTemperature)
  .post(temperatureController.postTemperature);

export default router;
