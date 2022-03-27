import { Prisma } from '@prisma/client';
import { ErrorCode } from '../error-handler/error-code';
import { ErrorException } from '../error-handler/error-exception';
import prisma from '../lib/prisma';
import ChallengeImpl from '../model/challenge';

export async function selectChallenges(
  createdAt: Date,
  accessibilityIds: number[]
): Promise<ChallengeImpl[]> {
  try {
    const result = await prisma.challenge.findMany({
      include: {
        ChallengeAccessibility: {
          select: {
            accessibilityId: true,
          },
        },
      },
      where: {
        createdAt: {
          gte: createdAt,
        },
        ChallengeAccessibility: {
          every: {
            accessibilityId: {
              in: accessibilityIds,
            },
          },
        },
      },
    });

    return result.map((c) =>
      ChallengeImpl.fromPrisma(
        c,
        c.ChallengeAccessibility.map((val) => val.accessibilityId)
      )
    );
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ErrorException(ErrorCode.PrismaError);
    }
    throw new ErrorException(ErrorCode.ServiceError, (e as Error).message);
  }
}
