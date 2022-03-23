import { User as UserPrisma } from '@prisma/client';

export interface UserRegisterBody {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  dateOfBirth: Date;
  gender: number;
  accessibilitySettingIds: number[];
}

export interface UserLoginReqParams {
  username: string;
  password: string;
}

export interface UserResetPasswordBody {
  username: string;
  dateOfBirth: Date;
  newPassword: string;
}

export interface UserUpdateBody {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  dateOfBirth: Date;
  gender: string;
  notiPush: boolean;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password?: string;
  salt?: string;
  dateOfBirth: Date;
  gender: number;
  notiPush: boolean;
  profileImgPath: string;
}

export default class UserImpl implements User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  dateOfBirth: Date;
  gender: number;
  notiPush: boolean;
  profileImgPath: string;

  static fromPrisma(input: UserPrisma): UserImpl {
    return new this(
      input.id,
      input.firstName,
      input.lastName,
      input.username,
      input.dateOfBirth,
      input.gender,
      input.notiPush,
      input.profileImgPath
    );
  }

  static fromUserUpdateBody(input: UserUpdateBody): UserImpl {
    const gender = input.gender === 'male' ? 0 : 1;

    return new this(
      input.id,
      input.firstName,
      input.lastName,
      input.username,
      input.dateOfBirth,
      gender,
      input.notiPush
    );
  }

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    dateOfBirth: Date,
    gender: number,
    notiPush: boolean,
    profileImgPath: string = ''
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.notiPush = notiPush;
    this.profileImgPath = profileImgPath;
  }
}
