import path from "node:path";
import { convertLength } from "../utils/converter.js";
import { buildPage } from "../utils/buildPage.js";

// Get
const getLength = (req, res) => {
  res.send(buildPage("length"));
};

// Post
const postLength = (req, res) => {
  const { value, from, to } = req.body;
  const result = convertLength(parseFloat(value), from, to)
    .toFixed(2)
    .replace(".00", "");
  res.send(buildPage("length", { value, from, to, result }, true));
};

export default { getLength, postLength };
