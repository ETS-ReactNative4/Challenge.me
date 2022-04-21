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
      include: {
        ChallengeAccessibility: {
          select: {
            accessibilityId: true,
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

export async function selectUserChallenges(
  username: string,
  isCompleted: boolean,
  createdAt: Date
): Promise<ChallengeImpl[]> {
  try {
    const user = await prisma.user.findFirst({
      select: { id: true },
      where: { username: { equals: username } },
    });

    if (user === null) throw new ErrorException();

    const challengeIds = await prisma.userChallenge.findMany({
      where: {
        userId: { equals: user.id },
        isCompleted: { equals: isCompleted },
      },
    });

    const result = await prisma.challenge.findMany({
      where: {
        id: {
          in: challengeIds.map((val) => val.challengeId),
        },
        createdAt: {
          gte: createdAt,
        },
      },
      include: {
        ChallengeAccessibility: {
          select: {
            accessibilityId: true,
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
