import express, { NextFunction, Request, response, Response } from 'express';
import * as userHandler from '../handlers/user.handler';
import jwtChecker from '../middleware/jwtChecker';
import {
  UserLoginReqParams,
  UserRegisterBody,
  UserResetPasswordBody,
} from '../model/user';

const router = express.Router();

router.post(
  '/',
  (
    req: Request<any, any, UserRegisterBody>,
    res: Response,
    next: NextFunction
  ) => {
    userHandler.register(req, res, next);
  }
);

router.get(
  '/login',
  (
    req: Request<any, any, any, UserLoginReqParams>,
    res: Response,
    next: NextFunction
  ) => {
    userHandler.login(req, res, next);
  }
);

router.put(
  '/password',
  (
    req: Request<any, any, UserResetPasswordBody>,
    res: Response,
    next: NextFunction
  ) => {
    userHandler.resetPassword(req, res, next);
  }
);

export default router;
