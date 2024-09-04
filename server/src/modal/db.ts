import mongoose from "mongoose";
import { CONN_STRING } from "../utils/constants.js";

export const initializeDatabase = async () => {
  try {
    const connectionString = CONN_STRING;
    console.log("Connecting to database", connectionString);
    await mongoose.connect(connectionString);
  } catch (e) {
    console.error("Error connecting to database", e);
  }
};
