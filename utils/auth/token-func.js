import { sign, verify } from "jsonwebtoken";

export default async function JenerateToken(email) {
  const token = sign({ ...email }, process.env.tokenKey, {
    expiresIn: "168h",
  });
  return token;
}
export async function VerifyToken(token) {
  try {
    const input = verify(token, process.env.tokenKey);
    return input;
  } catch (error) {
    return false;
  }
}
