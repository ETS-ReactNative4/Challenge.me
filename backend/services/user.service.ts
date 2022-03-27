import prisma from '../lib/prisma';
import UserImpl, { UserLoginQueryParam, UserRegisterBody } from '../model/user';
import { generateSalt, hashPassword } from '../lib/cypto';
import { Prisma, User as UserPrisma } from '@prisma/client';
import { ErrorException } from '../error-handler/error-exception';
import { ErrorCode } from '../error-handler/error-code';

export async function checkUserExists(username: string): Promise<boolean> {
  return (await prisma.user.count({ where: { username: username } })) === 1;
}

export async function createUser(user: UserRegisterBody): Promise<UserPrisma> {
  const salt = await generateSalt();
  const hash = await hashPassword(user.password, salt);

  try {
    return await prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: hash,
        salt: salt,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender,
        notiPush: true,
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ErrorException(ErrorCode.PrismaError);
    }
    throw new ErrorException(ErrorCode.ServiceError, (e as Error).message);
  }
}

export async function checkPasswordMatch(
  cred: UserLoginQueryParam
): Promise<boolean> {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username: cred.username,
      },
    });
    if (user === null || user.salt === null) return false;

    return user.password === (await hashPassword(cred.password, user.salt));
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ErrorException(ErrorCode.PrismaError);
    }
    throw new ErrorException(ErrorCode.ServiceError, (e as Error).message);
  }
}

export async function checkDobMatch(
  username: string,
  dateOfBirth: Date
): Promise<boolean> {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (user === null || user.dateOfBirth === null) return false;

    return user.dateOfBirth.getTime() === dateOfBirth.getTime();
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ErrorException(ErrorCode.PrismaError);
    }
    throw new ErrorException(ErrorCode.ServiceError, (e as Error).message);
  }
}

export async function updatePassword(
  username: string,
  newPassword: string
): Promise<UserPrisma> {
  const salt = await generateSalt();
  const hash = await hashPassword(newPassword, salt);

  try {
    return await prisma.user.update({
      where: {
        username: username,
      },
      data: {
        salt: salt,
        password: hash,
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ErrorException(ErrorCode.PrismaError);
    }
    throw new ErrorException(ErrorCode.ServiceError, (e as Error).message);
  }
}

export async function checkUsernameTaken(
  userId: number,
  username: string
): Promise<boolean> {
  return (
    (await prisma.user.count({
      where: {
        username: username,
        NOT: {
          id: userId,
        },
      },
    })) === 1
  );
}

export async function updateUser(user: UserImpl): Promise<UserImpl> {
  try {
    return UserImpl.fromPrisma(
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          dateOfBirth: user.dateOfBirth,
          gender: user.gender,
          notiPush: user.notiPush,
        },
      })
    );
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ErrorException(ErrorCode.PrismaError);
    }
    throw new ErrorException(ErrorCode.ServiceError, (e as Error).message);
  }
}

export async function selectUser(id: number): Promise<UserImpl | undefined> {
  try {
    const prismaUser = await prisma.user.findFirst({
      where: { id: id },
      include: {
        UserAccessibility: {
          select: { accessibilityId: true },
          where: { userId: id },
        },
      },
    });
    if (prismaUser === null) return;

    return UserImpl.fromPrisma(
      prismaUser,
      prismaUser.UserAccessibility.map((val) => val.accessibilityId)
    );
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ErrorException(ErrorCode.PrismaError);
    }
    throw new ErrorException(ErrorCode.ServiceError, (e as Error).message);
  }
}

export async function updateChallengeCompleted(
  userId: number,
  challengeId: number
) {
  try {
    await prisma.userChallenge.update({
      where: {
        userId_challengeId: {
          userId: userId,
          challengeId: challengeId,
        },
      },
      data: {
        isCompleted: true,
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ErrorException(ErrorCode.PrismaError);
    }
    throw new ErrorException(ErrorCode.ServiceError, (e as Error).message);
  }
}
