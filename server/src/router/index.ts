import { Router } from "express";
import blog from "./blog.js";

const router = Router();

export default (): Router => {
  blog(router);
  return router;
};
