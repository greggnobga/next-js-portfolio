/** Vendor. */
import { NextResponse } from 'next/server';

/** Lib. */
import connectDB from '../../../lib/db';

/** Connect MongonDB. */
connectDB();

export async function POST(request) {
  /** Await the post data. */
  const data = await request.json();

  console.log(data);

  return NextResponse.json({ message: 'Project api route!', status: 200 });
}
