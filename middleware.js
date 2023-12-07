/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Watcher from './lib/watcher';

/** Export default function. */
export default async function middleware(request) {
  /** Call the watcher to verify the cookie integrity. */
  const { verified } = await Watcher(request);

  /** If in login page with no token just return. */
  if (request.nextUrl.pathname.startsWith('/login') && !verified) {
    return;
  }

  /** If no verified token. */
  if (!verified) {
    /** Return to login page. */
    return NextResponse.redirect(`${process.env.HOST}/login`);
  }

  /** If in login page with no token just return. */
  if (request.nextUrl.pathname.startsWith('/login') && verified) {
    return NextResponse.redirect(`${process.env.HOST}/dashboard`);
  }
}

/** Export config. */
export const config = {
  matcher: ['/dashboard', '/login'],
};
