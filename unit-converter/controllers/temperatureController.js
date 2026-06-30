import path from "node:path";
import { convertTemperature } from "../utils/converter.js";
import { buildPage } from "../utils/buildPage.js";

// Get
const getTemperature = (req, res) => {
  res.send(buildPage("temperature"));
};

// Post
const postTemperature = (req, res) => {
  const { value, from, to } = req.body;
  const result = convertTemperature(parseFloat(value), from, to)
    .toFixed(2)
    .replace(".00", "");
  res.send(buildPage("temperature", { value, from, to, result }, true));
};

export default { getTemperature, postTemperature };
