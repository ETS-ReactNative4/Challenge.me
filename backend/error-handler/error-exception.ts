import { ErrorCode } from './error-code';

export class ErrorException extends Error {
  public status: number = 500;
  public message: string = '';

  constructor(code: string = ErrorCode.UnknownError, message: string = '') {
    super(code);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = code;
    this.message = message;
    switch (code) {
      case ErrorCode.Unauthenticated:
        this.status = 401;
        break;
      case ErrorCode.NotFound:
        this.status = 404;
        break;
      case ErrorCode.BadRequest:
        this.status = 400;
        break;
      case ErrorCode.PrismaError:
        this.status = 500;
        break;
      case ErrorCode.ServiceError:
        this.status = 500;
        break;
      default:
        this.status = 500;
    }
  }
}
