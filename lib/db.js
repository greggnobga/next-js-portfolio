import mongoose from 'mongoose';
import dotenv from 'dotenv';

/** Run dotenv config. */
dotenv.config();

/** Declare async function. */
const Database = async () => {
  try {
    /** Connect to mongoDB. */
    const connect = await mongoose.connect(process.env.MONGO_URI, {});
    /** Log if connection successful. */
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    /** Log if connection fail. */
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

/** Export function. */
export default Database;
