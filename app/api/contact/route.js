/** Vendor. */
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

/** Lib. */
import { Sanitizer } from '../../../lib/sanitizer';

export async function GET() {
  const client = await MongoClient.connect(process.env.MONGO_URI, {});

  const db = client.db();
  //   console.log(db);
  //   const inquiries = db.collection('inquiries');

  //   const findMe = await inquiries.find().toArray();

  //   console.log(findMe);

  client.close();

  return NextResponse.json('Connected to database');
}

export async function POST(request) {
  const data = await request.json();

  const filtered = await Sanitizer(data);

  for (let key in filtered) {
    console.log(key + ': ' + filtered[key]);
  }

  return NextResponse.json(filtered);

  // const client = await MongoClient.connect(process.env.MONGO_URI, {});

  // const db = client.db();
  // console.log(db);
  // const inquiries = db.collection('inquiries');

  // const findMe = await inquiries.find().toArray();

  // console.log(findMe);

  // client.close();

  // return NextResponse.json('Connected to database');
}
