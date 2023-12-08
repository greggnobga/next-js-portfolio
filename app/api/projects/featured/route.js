/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../../lib/db';

/** Model. */
import Project from '../../../../mongo/models/project-model';

/** Connect MongonDB. */
Database();

/** GET. */
export async function GET(request) {
  /** Fetch all messages record. */
  try {
    /** Check for existing record. */
    const featured = await Project.find({}).select('_id name description image tags demo').limit(3).exec();

    /** Prevent user from sending multiple message. */
    if (featured) {
      /** Return message list. */
      return NextResponse.json(featured);
    } else {
      /** Return warning message. */
      return NextResponse.json({ message: 'No featured project so far.', status: 200 });
    }
  } catch (error) {
    /** Return error message. */
    return NextResponse.json({ message: 'Unable to fetched featured project!', status: 500 });
  }
}
