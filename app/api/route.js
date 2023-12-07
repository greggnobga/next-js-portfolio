/** Vendor. */
import { NextResponse } from 'next/server';

/** Lib. */
import Database from '../../lib/db';

/** Connect MongonDB. */
Database();

/** GET. */
export async function GET(request) {
  /** Return error message. */
  return NextResponse.json({ message: 'Curiosity killed the cat!', status: 200 });
}

/** GET. */
export async function POST(request) {
  /** Return error message. */
  return NextResponse.json({ message: 'Curiosity killed the cat!', status: 200 });
}
