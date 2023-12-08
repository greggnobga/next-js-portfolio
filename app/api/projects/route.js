/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/db';

/** Model. */
import Project from '../../../mongo/models/project-model';

/** Connect MongonDB. */
Database();

/** GET. */
export async function GET(request) {
  /** Fetch all messages record. */
  try {
    /** Check for existing record. */
    const projects = await Project.find({}).select('_id name permalink description image tags demo').limit(10).exec();

    /** Prevent user from sending multiple message. */
    if (projects) {
      /** Return message list. */
      return NextResponse.json(projects);
    } else {
      /** Return warning message. */
      return NextResponse.json({ message: 'No projects so far.', status: 200 });
    }
  } catch (error) {
    /** Return error message. */
    return NextResponse.json({ message: 'Unable to fetched projects!', status: 500 });
  }
}
