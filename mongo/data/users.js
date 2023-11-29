/** Vendor. */
import bcrypt from 'bcryptjs';

/** Define users data. */
const users = [
  {
    email: 'reijo@buntod.com',
    name: 'Reijo N',
    password: bcrypt.hashSync('1234567890'),
    isAdmin: true,
  },
  {
    email: 'orion@buntod.com',
    name: 'Orion N',
    password: bcrypt.hashSync('1234567890'),
    isAdmin: false,
  },
  {
    email: 'grigor@buntod.com',
    name: 'Orion N',
    password: bcrypt.hashSync('1234567890'),
    isAdmin: false,
  },
];

export default users;
