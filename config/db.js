import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const uri = process.env.MONGODBURI;
export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("db connected successfully");
  } catch (error) {
    console.log("db failed: ", error.message);
  }
};
