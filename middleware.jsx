/** Vendor. */
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export default async function middleware(request) {
  /** Get token cookie. */
  const cookie = request.cookies.get('token');

  console.log(cookie);

  if (cookie && request.url === `${process.env.HOST}/dashboard`) {
    try {
      console.log(request.url);
      console.log('Check jwt token if valid, protected route.');
      throw new Error('Not valid token');
      return NextResponse.next();
    } catch (error) {
      return NextResponse.json('Forbidden', error);
    }
  } else {
    console.log(request.url);
    console.log('Not protected route');
    /** Return something. */
    return NextResponse.next();
  }
}
