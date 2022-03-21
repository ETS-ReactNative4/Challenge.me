import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { ErrorException } from "./error-exception";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Path:", req.path);
  console.error("Error occured:", err);

  if (err instanceof ErrorException) {
    res.status(err.status).send(err);
  } else {
    // For unhandled errors.
    res.status(500).send({ message: "An unknown error occurred." });
  }
};
