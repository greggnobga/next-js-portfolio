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
        password: bcrypt.hashSync(process.env.SEEDER_PASSWORD, 12),
        admin: true,
    },
    {
        email: 'orion@buntod.com',
        name: 'Orion N',
        password: bcrypt.hashSync(process.env.SEEDER_PASSWORD, 12),
    },
    {
        email: 'grigor@buntod.com',
        name: 'Orion N',
        password: bcrypt.hashSync(process.env.SEEDER_PASSWORD, 12),
    },
];

export default users;
