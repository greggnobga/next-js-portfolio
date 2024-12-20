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

    /** If in dashboard page with valid token just return. */
    if (request.nextUrl.pathname.startsWith('/dashboard') && verified) {
        return;
    }

    /** If in login page with valid token redirect to dashboard. */
    if (request.nextUrl.pathname.startsWith('/login') && verified) {
        return NextResponse.redirect(`${process.env.HOST}/dashboard`);
    }

    /** If in login page with no valid token redirect to login. */
    if (request.nextUrl.pathname.startsWith('/dashboard') && !verified) {
        return NextResponse.redirect(`${process.env.HOST}/login`);
    }
}

/** Export config. */
export const config = {
    matcher: ['/dashboard', '/login'],
};
