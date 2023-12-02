import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

/** Run dotenv config. */
dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

export default generateToken;
