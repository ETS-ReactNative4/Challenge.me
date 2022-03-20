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

export default class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password?: string;
  salt?: string;
  dateOfBirth: Date;
  gender: string;
  notiPush: boolean;
  profileImgPath: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    dateOfBirth: Date,
    notiPush: boolean,
    profileImgPath: string,
    gender: number,
    password?: string,
    salt?: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.dateOfBirth = dateOfBirth;
    this.notiPush = notiPush;
    this.profileImgPath = profileImgPath;
    this.password = password;
    this.salt = salt;

    switch (gender) {
      case 0:
        this.gender = "male";
        break;
      case 1:
        this.gender = "female";
        break;
      default:
        this.gender = "";
    }
  }
}
