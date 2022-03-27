import express, { NextFunction, Request, Response } from 'express';
import * as handler from '../handlers/challenge.handler';
import jwtChecker from '../middleware/jwtChecker';

const router = express.Router();

router.get(
  '/',
  jwtChecker,
  (req: Request, res: Response, next: NextFunction) => {
    handler.getChallenges(req, res, next);
  }
);

router.get(
  '/user',
  jwtChecker,
  (req: Request, res: Response, next: NextFunction) => {
    handler.getUserChallenges(req, res, next);
  }
);

export default router;
