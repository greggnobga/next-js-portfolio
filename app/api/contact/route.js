/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/db';
import Watcher from '../../../lib/watcher';
import { Sanitizer } from '../../../lib/sanitizer';

/** Model. */
import Message from '../../../mongo/models/message-model';

/** Connect MongonDB. */
Database();

/** GET. */
export async function GET(request) {
  /** Call the watcher to verify the cookie integrity. */
  const { verified } = await Watcher(request);

  /** Watcher verdict. */
  if (verified) {
    /** Fetch all messages record. */
    try {
      /** Check for existing record. */
      const messages = await Message.find({}).select('email name message read').exec();

      /** Prevent user from sending multiple message. */
      if (messages) {
        /** Return message list. */
        return NextResponse.json(messages);
      } else {
        /** Return warning message. */
        return NextResponse.json({ message: 'No message so far.', status: 200 });
      }
    } catch (error) {
      /** Return error message. */
      return NextResponse.json({ message: 'Unable to fetched message list!', status: 500 });
    }
  } else {
    /** Return error message. */
    return NextResponse.json({ message: 'Before the request stands a watcher on guard.', status: 403 });
  }
}

/** Post contact message. */
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
    return NextResponse.json({ message: 'You have already sent a message; please await the developers response.', status: 302 });
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
