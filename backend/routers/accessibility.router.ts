import express, { NextFunction, Request, Response } from 'express';
import * as handler from '../handlers/accessibility.handler';
import jwtChecker from '../middleware/jwtChecker';

const router = express.Router();

router.get(
  '/',
  jwtChecker,
  (req: Request, res: Response, next: NextFunction) => {
    handler.getAll(req, res, next);
  }
);

export default router;
