import { User as UserPrisma } from '@prisma/client';

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
  profileImg: string;
  accessibilityIds: number[];
}

export default class UserImpl implements User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  dateOfBirth: Date;
  gender: number;
  notiPush: boolean;
  profileImg: string;
  accessibilityIds: number[];

  static fromPrisma(u: UserPrisma, accessibilityIds: number[] = []): UserImpl {
    return new this(
      u.id,
      u.firstName,
      u.lastName,
      u.username,
      u.dateOfBirth,
      u.gender,
      u.notiPush,
      '',
      accessibilityIds
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
    profileImg: string = '',
    accessibilityIds: number[] = []
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.notiPush = notiPush;
    this.profileImg = profileImg;
    this.accessibilityIds = accessibilityIds;
  }

  set _setProfileImg(b64: string) {
    this.profileImg = b64;
  }
}

/********** Request Inputs **********/
export interface UserRegisterBody {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  dateOfBirth: Date;
  gender: number;
  accessibilitySettingIds: number[];
}

export interface UserLoginQueryParam {
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

export interface UserUploadPictureBody {
  id: number;
  imageB64: string;
}

export interface UserMarkChallengeCompletedBody {
  userId: number;
  challengeId: number;
}
