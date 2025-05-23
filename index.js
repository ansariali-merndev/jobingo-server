import express from "express";
import { configDotenv } from "dotenv";
import { router } from "./router/route.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

configDotenv();
const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: process.env.URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is Running on http://localhost:${PORT}`);
  });
});
