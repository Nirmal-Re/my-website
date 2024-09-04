import express from "express";
import cors from "cors";

import router from "./router/index.js";
import { initializeDatabase } from "./modal/db.js";

initializeDatabase();

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/blog", router());

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
