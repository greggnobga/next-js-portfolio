/** Vendor. */
import cookie from 'cookie';
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/db';
import { generateToken } from '../../../lib/token';

/** Model. */
import User from '../../../mongo/models/user-model';

/** Connect MongonDB. */
Database();

export async function POST(request) {
  /** Await the post data. */
  const { email, password } = await request.json();

  /** Find user in database. */
  const user = await User.findOne({ email });

  /** Check if found. */
  if (user && (await user.matchPassword(password))) {
    /** Return user found message and related data. */
    return NextResponse.json(
      {
        email: user.email,
        name: user.name,
        admin: user.admin,
        message: user.name + ', we are glad you are back and hope you will have a good time with us.',
        status: 200,
        logged: true,
      },
      {
        headers: {
          'Set-Cookie': cookie.serialize('token', await generateToken({ id: user._id, admin: user.admin }), {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            MaxAge: 60 * 60,
            sameSite: 'strict',
            path: '/',
          }),
        },
      },
    );
  } else {
    /** Return user not found message. */
    return NextResponse.json({ message: 'The email address or password entered does not match.', status: 302 });
  }
}
