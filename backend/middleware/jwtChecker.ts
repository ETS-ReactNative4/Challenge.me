import { Request, Response, NextFunction } from 'express';
import { verify, sign } from 'jsonwebtoken';
import { ErrorCode } from '../error-handler/error-code';
import { ErrorException } from '../error-handler/error-exception';

function jwtChecker(req: Request, res: Response, next: NextFunction) {
  let token = <string>req.headers['authorization'];

  if (!token) {
    throw new ErrorException(ErrorCode.Unauthenticated, 'Token not found.');
  }

  if (!token.includes('Bearer ')) {
    throw new ErrorException(ErrorCode.Unauthenticated, 'Wrong auth schema.');
  } else {
    token = token.replace('Bearer ', '');
  }

  const refreshToken = <string>req.headers['refresh-token'];
  let jwtPayload: any;

  try {
    jwtPayload = <any>verify(token, <string>process.env.TOKEN_SECRET);
  } catch (e) {
    try {
      jwtPayload = <any>verify(refreshToken, <string>process.env.TOKEN_SECRET);
    } catch (err) {
      throw new ErrorException(
        ErrorCode.Unauthenticated,
        'Failed to verify token; ' + (err as Error).message
      );
    }
  }

  const { username } = jwtPayload;
  const newToken = sign(
    { username: username },
    <string>process.env.TOKEN_SECRET,
    {
      expiresIn: process.env.TOKEN_LIFE,
    }
  );

  res.setHeader('token', newToken);
  next();
}

export default jwtChecker;
