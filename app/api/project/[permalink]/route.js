/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../../lib/db';
import Project from '../../../../mongo/models/project-model.js';

/** Connect MongonDB. */
Database();

export async function GET(request, { params }) {
  /** Await the post data. */
  const { permalink } = await params;

  /** Fetch project details. */
  try {
    /** Select a project from database. */
    const record = await Project.findOne({ permalink: permalink }).select('name description image tags permalink demo').exec();

    /** Return success message. */
    return NextResponse.json(record);
  } catch (error) {
    /** Return error message. */
    return NextResponse.json({ message: 'Error fetching record' });
  }
}
