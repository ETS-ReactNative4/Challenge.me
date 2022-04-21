import prisma from '../lib/prisma';
import { Prisma } from '@prisma/client';
import AccessibilityImpl from '../model/accessibility';
import { ErrorException } from '../error-handler/error-exception';
import { ErrorCode } from '../error-handler/error-code';

export async function selectAll(): Promise<AccessibilityImpl[]> {
  try {
    const result = await prisma.accessibility.findMany();
    return result.map((a) => AccessibilityImpl.fromPrisma(a));
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ErrorException(ErrorCode.PrismaError);
    }
    throw new ErrorException(ErrorCode.ServiceError, (e as Error).message);
  }
}
