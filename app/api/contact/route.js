/** Vendor. */
import { NextResponse } from 'next/server';

/** Lib. */
import connectDB from '../../../lib/db';
import { Sanitizer } from '../../../lib/sanitizer';
import Message from '../../../mongo/models/message-model';

/** Connect MongonDB. */
connectDB();

export async function POST(request) {
  /** Await the post data. */
  const data = await request.json();

  /** Sanitize post data. */
  const filtered = await Sanitizer(data);

  /** Check for existing record. */
  const exist = await Message.findOne({ email: filtered.email }).select('name  -_id').exec();

  /** Prevent user from sending multiple message. */
  if (exist) {
    /** Return warning message. */
    return NextResponse.json({ message: 'You have already sent a message; please await the developers response.', exist, status: 302 });
  }

  /** Add to database record. */
  try {
    /** Create an instance and then save. */
    const result = new Message(filtered);
    await result.save();

    /** Return success message. */
    return NextResponse.json({ message: 'Message sent successfully', status: 200 });
  } catch (error) {
    /** Return error message. */
    return NextResponse.json({ message: 'Unable to send a message!', status: 500 });
  }
}
