import { NextFunction, Request, Response } from 'express';
import { ResponseBody } from '../model/interfaces';
import * as service from '../services/accessibility.service';

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const accessibilities = await service.selectAll();
    const resBody: ResponseBody = {
      message: 'Get all accessibilities successful.',
      data: accessibilities,
    };
    res.status(200).json(resBody);
  } catch (e) {
    next(e);
  }
}
