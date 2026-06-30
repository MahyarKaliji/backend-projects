import path from "node:path";
import { convertWeight } from "../utils/converter.js";
import { buildPage } from "../utils/buildPage.js";

// Get
const getWeight = (req, res) => {
  res.send(buildPage("weight"));
};

// Post
const postWeight = (req, res) => {
  const { value, from, to } = req.body;
  const result = convertWeight(parseFloat(value), from, to)
    .toFixed(2)
    .replace(".00", "");
  res.send(buildPage("weight", { value, from, to, result }, true));
};

export default { getWeight, postWeight };
