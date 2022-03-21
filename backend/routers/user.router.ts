import express, { NextFunction, Request, response, Response } from "express";
import * as userHandler from "../handlers/user.handler";
import {
  UserLoginReqParams,
  UserRegisterBody,
  UserResetPasswordBody,
} from "../model/user";

const router = express.Router();

router.post("/", (req: Request<any, any, UserRegisterBody>, res: Response) => {
  userHandler.register(req, res);
});

router.get(
  "/login",
  (req: Request<any, any, any, UserLoginReqParams>, res: Response) => {
    userHandler.login(req, res);
  }
);

router.put(
  "/password",
  (
    req: Request<any, any, UserResetPasswordBody>,
    res: Response,
    next: NextFunction
  ) => {
    userHandler.resetPassword(req, res, next);
  }
);

export default router;
