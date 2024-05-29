import express from "express";
import cors from "cors";

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

app.get("/", (req, res) => {
  res.json({ key: "value" });
});

app.listen(5000, () => {
  console.log("Server is listening on prt 4000");
});
