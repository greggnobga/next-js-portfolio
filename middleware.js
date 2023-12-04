/** Vendor. */
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

/** Library. */
import { verifyToken } from './lib/token';

/** Export default function. */
export default async function middleware(request) {
  /** Get cookie in the jar. */
  const token = request.cookies.get('token')?.value;

  /** Verify token. */
  const verifiedToken =
    token &&
    (await verifyToken(token).catch((error) => {
      console.log(error);
    }));

  /** If in login page with no token just return. */
  if (request.nextUrl.pathname.startsWith('/login') && !verifiedToken) {
    return;
  }

  /** If in login page with no token just return. */
  if (request.nextUrl.pathname.startsWith('/login') && verifiedToken) {
    return NextResponse.redirect(`${process.env.HOST}/dashboard`);
  }

  /** If no verified token. */
  if (!verifiedToken) {
    return NextResponse.redirect(`${process.env.HOST}/login`);
  }
}

/** Export config. */
export const config = {
  matcher: ['/dashboard', '/login'],
};
