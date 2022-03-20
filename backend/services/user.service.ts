import prisma from "../lib/prisma";
import { UserLoginReqParams, UserRegisterBody } from "../model/user";
import { generateSalt, hashPassword } from "../lib/cypto";
import { Prisma, User } from "@prisma/client";
import { ErrorException } from "../error-handler/error-exception";
import { ErrorCode } from "../error-handler/error-code";

export async function checkUserExists(username: string): Promise<boolean> {
  return (await prisma.user.count({ where: { username: username } })) === 1;
}

export async function createUser(user: UserRegisterBody): Promise<User> {
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
    throw new ErrorException(ErrorCode.UnknownDbError);
  }
}

export async function checkPasswordMatch(
  cred: UserLoginReqParams
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
    throw new ErrorException(ErrorCode.UnknownDbError);
  }
}