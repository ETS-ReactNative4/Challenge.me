export interface ResponseBody {
  message: string;
  data?: any;
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
  profileImgPath?: string;
}

export interface Accessbility {
  id: number;
  label: string;
}

export interface Challenge {
  id: number;
  label: string;
  points: number;
}
