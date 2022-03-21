import { NextFunction, Request, Response } from "express";
import { ErrorCode } from "../error-handler/error-code";
import { ErrorException } from "../error-handler/error-exception";
import { ResponseBody } from "../model/interfaces";
import {
  UserLoginReqParams,
  UserRegisterBody,
  UserResetPasswordBody,
} from "../model/user";
import {
  checkDobMatch,
  checkPasswordMatch,
  checkUserExists,
  createUser,
  updatePassword,
} from "../services/user.service";
import { sign } from "jsonwebtoken";
import { nextTick } from "process";

export async function register(
  req: Request<any, any, UserRegisterBody>,
  res: Response
) {
  let resBody: ResponseBody = { message: "Register failed." };

  try {
    let input = req.body;

    if (await checkUserExists(input.username)) {
      resBody.message = "User already exists!";
      return res.status(400).json(resBody);
    }

    const user = await createUser(input);
    if (user) {
      resBody = {
        message: "User created successfully.",
        data: { id: user.id },
      };

      return res.status(200).json(resBody);
    }

    return res.status(500).json(resBody);
  } catch (e) {
    throw new ErrorException(ErrorCode.UnknownError, (e as Error).message);
  }
}

export async function login(
  req: Request<any, any, any, UserLoginReqParams>,
  res: Response
) {
  let resBody: ResponseBody = { message: "Login failed" };

  try {
    const input = req.query;

    if (!(await checkUserExists(input.username))) {
      resBody.message = "User does not exist.";
      return res.status(401).json(resBody);
    }

    if (!(await checkPasswordMatch(input))) {
      resBody.message = "Wrong password.";
      return res.status(401).json(resBody);
    }

    const token = sign(
      { username: input.username, iat: Date.now() },
      // @ts-ignore
      process.env.TOKEN_SECRET,
      {
        expiresIn: process.env.TOKEN_LIFE,
      }
    );
    const refreshToken = sign(
      { username: input.username, iat: Date.now() },
      // @ts-ignore
      process.env.TOKEN_SECRET,
      {
        expiresIn: process.env.TOKEN_REFRESH_LIFE,
      }
    );

    return res.status(200).json({ token: token, refreshToken: refreshToken });
  } catch (e) {
    throw new ErrorException(ErrorCode.UnknownError, (e as Error).message);
  }
}

export async function resetPassword(
  req: Request<any, any, UserResetPasswordBody>,
  res: Response,
  next: NextFunction
) {
  let resBody: ResponseBody = { message: "Reset password failed." };

  try {
    const input = req.body;

    if (!(await checkDobMatch(input.username, new Date(input.dateOfBirth)))) {
      resBody.message = "Username and date of birth does not match.";
      return res.status(401).json(resBody);
    }

    const user = await updatePassword(input.username, input.newPassword);
    if (user) {
      resBody.message = "Reset password successful.";
      return res.status(200).json(resBody);
    }

    return res.status(500).json(resBody);
  } catch (e) {
    // throw new ErrorException(ErrorCode.UnknownError, (e as Error).message);
    // throw e;
    next(e);
  }
}
