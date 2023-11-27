import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

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
