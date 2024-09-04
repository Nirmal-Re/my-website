import { Request, Response } from "express";

export const addBlog = (req: Request, res: Response) => {
  res.json({ body: "chest, abs, arms" });
};

export const allBlogsDetails = (req: Request, res: Response) => {
  res.json({ body: [{}] });
};

export const updateBlog = (req: Request, res: Response) => {
  res.json({ body: "updated" });
};

export const deleteBlog = (req: Request, res: Response) => {
  res.json({ body: "Blog has been deleted" });
};

export const getBlog = (req: Request, res: Response) => {
  res.json({ body: "Blog Details" });
};
