import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

//import { getInquiries } from '../../lib/mongo/inquiries';

export async function GET() {
    const client = await MongoClient.connect(process.env.MONGO_URI, {});

    const db = client.db();

    const inquiries = db.collection('inquiries');

    const findMe = await inquiries.find().toArray();

    console.log(findMe);

    client.close();

    return NextResponse.json({'records': findMe});

    // try {
    //     const {inquiries, error} = await getInquiries;
    //     if (error) throw new Error(error);
    //     return NextResponse.json({inquiries});
    // } catch (error) {
    //     return NextResponse.json({error: error.message});
    // }
};
