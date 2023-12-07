/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Watcher from '../../../../lib/watcher';
import Message from '../../../../mongo/models/message-model.js';

export async function GET(request, { params }) {
  /** Await the post data. */
  const { id } = await params;

  /** Call the watcher to verify the cookie integrity. */
  const { verified } = await Watcher(request);

  /** Watcher verdict. */
  if (verified && id) {
    /** Initiate try catch block. */
    try {
      /** Select a record from database. */
      const record = await Message.findOne({ _id: id }).select('_id email name email message read').exec();

      /** Return success message. */
      return NextResponse.json(record);
    } catch (error) {
      /** Return error message. */
      return NextResponse.json({ message: 'Error fetching record' });
    }
  } else {
    /** Return error message. */
    return NextResponse.json({ message: 'Before the request stands a watcher on guard.', status: 403 });
  }
}
