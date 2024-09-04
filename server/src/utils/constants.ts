import dotenv from "dotenv";
import assert from "assert";

import path from "path";

// load environment variables from .env file

const fileLocation = path.join(process.cwd(), "/.env");
dotenv.config({ path: fileLocation });

// database constants
export const CONN_STRING =
  process?.env?.CONN_STRING || "mongodb://localhost:27017";
