import { Request, Response } from "express";
import { ErrorCode } from "../error-handler/error-code";
import { ErrorException } from "../error-handler/error-exception";
import { ResponseBody } from "../interfaces";

export async function login(req: Request, res: Response): Promise<Response> {
  let resBody: ResponseBody = { message: "" };

  try {
    if (!req.query.username || !req.query.password) {
      throw new ErrorException(ErrorCode.BadRequest, {
        message: "Username and password required!",
      });
    }

    return res.status(200).json(resBody);
  } catch (err) {
    throw new ErrorException();
  }
}
