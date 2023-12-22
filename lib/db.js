import mongoose from 'mongoose';

const connection = {};

/** Declare async function. */
const Database = async () => {
    try {
        /** Retrun if databases already connected. */
        if (connection.isConnected) return;

        /** Connect to mongoDB. */
        const db = await mongoose.connect(process.env.MONGO_URI, {});

        /** Asign value to connection. */
        connection.isConnected = db.connections[0].readyState;

        /** Log if connection successful. */
        console.log(`Connected to database host: ${db.connection.host}`);
    } catch (error) {
        /** Log if connection fail. */
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

/** Export function. */
export default Database;
