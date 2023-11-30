/** Vendor. */
import { NextResponse } from 'next/server';
import { usePathname } from 'next/navigation';

/** Lib. */
import connectDB from '../../../lib/db';
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

// export async function POST(request) {
//   /** Await the post data. */
//   const data = await request.json();

//   /** Sanitize post data. */
//   const filtered = await Sanitizer(data);

//   /** Check for existing record. */
//   const exist = await Message.findOne({ email: filtered.email }).select('name  -_id').exec();

//   /** Prevent user from sending multiple message. */
//   if (exist) {
//     /** Return warning message. */
//     return NextResponse.json({ message: 'You have already sent a request; please await the developers response.', exist });
//   }

//   /** Add to database record. */
//   try {
//     /** Create an instance and then save. */
//     const result = new Message(filtered);
//     await result.save();

//     /** Return success message. */
//     return NextResponse.json({ message: 'Record created successfully' });
//   } catch (error) {
//     /** Return error message. */
//     return NextResponse.json({ message: 'Error creating record' });
//   }
// }
