import { NextFunction, Request, Response } from 'express';
import { ResponseBody } from '../model/interfaces';
import * as service from '../services/challenge.service';

export async function getChallenges(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const resBody: ResponseBody = { message: '' };

  try {
    if (!req.query.createdAt || !req.query.accessibilityIds) {
      resBody.message = 'createdAt and accessibilityIds required.';
      return res.status(400).json(resBody);
    }

    const createdAt = Date.parse(req.query.createdAt.toString());
    if (createdAt === NaN) {
      resBody.message = 'createdAt must be in ISO String format!';
      resBody.data = { received: req.query.createdAt };
      return res.status(400).json(resBody);
    }

    const accessibilityIds = JSON.parse(req.query.accessibilityIds.toString());
    if (accessibilityIds instanceof Array) {
      accessibilityIds.forEach((id, i) => (accessibilityIds[i] = parseInt(id)));

      if (accessibilityIds.includes(NaN)) {
        resBody.message = 'accessibilityIds must only contain integers!';
        resBody.data = { received: req.query.accessibilityIds };
        return res.status(400).json(resBody);
      }
    }

    const challenges = await service.selectChallenges(
      new Date(createdAt),
      accessibilityIds
    );

    resBody.message = `${challenges.length} challenges found.`;
    resBody.data = { challenges };

    return res.status(200).json(resBody);
  } catch (e) {
    next(e);
  }
}
