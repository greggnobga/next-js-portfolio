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
    admin: true,
  },
  {
    email: 'orion@buntod.com',
    name: 'Orion N',
    password: bcrypt.hashSync(process.env.SEEDER_PASSWORD),
  },
  {
    email: 'grigor@buntod.com',
    name: 'Orion N',
    password: bcrypt.hashSync(process.env.SEEDER_PASSWORD),
  },
];

export default users;
