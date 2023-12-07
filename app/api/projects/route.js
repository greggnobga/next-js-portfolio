/** Vendor. */
import { NextResponse } from 'next/server';

export async function GET(request) {
  /** Await the post data. */

  return NextResponse.json({ message: 'Project api route!', status: 200 });
}
