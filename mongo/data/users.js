/** Vendor. */
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

/** Run dotenv config. */
dotenv.config();

/** Define users data. */
const users = [
  {
    email: 'reijo@buntod.com',
    name: 'Reijo N',
    password: bcrypt.hashSync(process.env.SEEDER_PASSWORD),
    isAdmin: true,
  },
  {
    email: 'orion@buntod.com',
    name: 'Orion N',
    password: bcrypt.hashSync(process.env.SEEDER_PASSWORD),
    isAdmin: false,
  },
  {
    email: 'grigor@buntod.com',
    name: 'Orion N',
    password: bcrypt.hashSync(process.env.SEEDER_PASSWORD),
    isAdmin: false,
  },
];

export default users;
