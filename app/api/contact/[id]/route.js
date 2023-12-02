/** Vendor. */
import { NextResponse } from 'next/server';
import { usePathname } from 'next/navigation';

/** Lib. */
import connectDB from '../../../../lib/db';
import Message from '../../../../mongo/models/message-model.js';

/** Connect MongonDB. */
connectDB();

export async function GET(request, { params }) {
  /** Await the post data. */
  const { id } = await params;

  /** Check if id is not null. */
  if (id) {
    /** Initiate try catch block. */
    try {
      /** Select a record from database. */
      const record = await Message.findOne({ _id: id }).select('-_id').exec();

      /** Return success message. */
      return NextResponse.json({ message: 'Record fetching successfully', record });
    } catch (error) {
      /** Return error message. */
      return NextResponse.json({ message: 'Error fetching record' });
    }
  }
}
