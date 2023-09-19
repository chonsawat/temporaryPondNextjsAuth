import jwt from "jsonwebtoken";


export const decodeJWT = (token) => {
  if (!jwt) return null;

  try {
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
    return decoded;
  } catch (err) {
    console.error('Failed to decode token:', err);
    return null;
  }
};


