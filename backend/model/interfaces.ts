export interface ResponseBody {
  message: string;
  data?: any;
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
