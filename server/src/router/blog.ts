import { Router } from "express";
import {
  addBlog,
  allBlogsDetails,
  updateBlog,
  deleteBlog,
  getBlog,
} from "../controller/blog.js";

export default (router: Router) => {
  router.post("/add", addBlog);
  router.get("/all", allBlogsDetails);
  router.put("/update/:id", updateBlog);
  router.delete("delete/:id", deleteBlog);
  router.get("/get/:id", getBlog);
};
