/** Vendor. */
import jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';

const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

export const getJWTSecret = () => {
  /** Get environment variable. */
  const secret = process.env.JWT_SECRET;

  /** Check if jwt secret is define. */
  if (!secret || secret.length === 0) {
    throw new Error('The enviroment variable JWT_SECRET is not set.');
  }
  /** Return something. */
  return secret;
};

const verifyToken = async (token) => {
  /** Try block. */
  try {
    /** Run jwt verify. */
    const verified = await jwtVerify(token, new TextEncoder().encode(getJWTSecret()));

    /** Return something. */
    return verified.payload;
  } catch (error) {
    /** Catch block. */
    throw new Error('Your token has expired.');
  }
};

export { generateToken, verifyToken };
