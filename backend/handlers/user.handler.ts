import { Request, Response } from "express";
import { ErrorException } from "../error-handler/error-exception";
import { ResponseBody } from "../interfaces";

export async function login(req: Request, res: Response): Promise<Response> {
  let resBody: ResponseBody = { message: "" };

  try {
    return res.status(200).json(resBody);
  } catch (err) {
    throw new ErrorException();
  }
}
