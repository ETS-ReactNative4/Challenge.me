import express, { NextFunction, Request, Response } from 'express';
import * as handler from '../handlers/user.handler';
import jwtChecker from '../middleware/jwtChecker';
import {
  UserLoginQueryParam,
  UserMarkChallengeCompletedBody,
  UserRegisterBody,
  UserResetPasswordBody,
  UserUpdateBody,
  UserUploadPictureBody,
} from '../model/user';

const router = express.Router();

router.get(
  '/',
  jwtChecker,
  (req: Request, res: Response, next: NextFunction) => {
    handler.getUser(req, res, next);
  }
);

router.put(
  '/',
  jwtChecker,
  (
    req: Request<any, any, UserUpdateBody>,
    res: Response,
    next: NextFunction
  ) => {
    handler.editProfile(req, res, next);
  }
);

router.post(
  '/',
  (
    req: Request<any, any, UserRegisterBody>,
    res: Response,
    next: NextFunction
  ) => {
    handler.register(req, res, next);
  }
);

router.get(
  '/login',
  (
    req: Request<any, any, any, UserLoginQueryParam>,
    res: Response,
    next: NextFunction
  ) => {
    handler.login(req, res, next);
  }
);

router.put(
  '/password',
  (
    req: Request<any, any, UserResetPasswordBody>,
    res: Response,
    next: NextFunction
  ) => {
    handler.resetPassword(req, res, next);
  }
);

router.put(
  '/image',
  jwtChecker,
  (req: Request<any, any, UserUploadPictureBody>, res: Response) => {
    handler.uploadProfileImage(req, res);
  }
);

router.put(
  '/challenge',
  jwtChecker,
  (
    req: Request<any, any, UserMarkChallengeCompletedBody>,
    res: Response,
    next: NextFunction
  ) => {
    handler.markCompleted(req, res, next);
  }
);

export default router;
