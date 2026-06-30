import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import lengthRouter from "./routes/lengthRouter.js";
import weightRouter from "./routes/weightRouter.js";
import temperatureRouter from "./routes/temperatureRouter.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(join(__dirname, "public")));

app.use((req, res, next) => {
  console.log("Hello from the middlware 😉");

  next();
});

app.get("/", (req, res) => res.redirect("/length"));
app.use("/length", lengthRouter);
app.use("/weight", weightRouter);
app.use("/temperature", temperatureRouter);

export default app;
