/** Vendor. */
import cookie from 'cookie';
import { NextResponse } from 'next/server';

export async function POST(request) {
  /** Return something. */
  return NextResponse.json(
    { message: ' Cookie has been deleted.' },
    {
      headers: {
        'Set-Cookie': cookie.serialize('token', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          MaxAge: new Date(0),
          sameSite: 'strict',
          path: '/',
        }),
      },
    },
  );
}