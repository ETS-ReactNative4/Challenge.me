import { genSalt, hash } from "bcrypt";

export async function generateSalt() {
  return await genSalt(10);
}

export async function hashPassword(clearTextPassword: string, salt: string) {
  return await hash(clearTextPassword, salt);
}
