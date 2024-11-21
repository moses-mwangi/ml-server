import { NextFunction, Request, Response } from "express";

const getTest = async (req: Request, res: Response, next: NextFunction) => {
  console.log("JUST FOR TESTING");

  res.status(200).json({ status: "success", data: "None" });
};

export default getTest;
