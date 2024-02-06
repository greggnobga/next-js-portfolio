/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../../lib/db';

/** Model. */
import Project from '../../../../mongo/models/project-model.js';

/** Connect MongonDB. */
Database();

export async function GET(request, { params }) {
    /** Await the post data. */
    const { permalink } = await params;

    /** Fetch project details. */
    /** Select a project from database. */
    const record = await Project.findOne({ permalink: permalink }).select('name description image tags permalink demo').exec();

    if (record) {
        /** Return success message. */
        return NextResponse.json(record);
    } else {
        /** Return error message. */
        return NextResponse.json({ message: 'No project found.' });
    }
}
