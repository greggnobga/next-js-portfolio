/** Vendor. */
import mongoose from 'mongoose';

/** Models. */
import User from './models/user-model.js';
import Message from './models/message-model.js';

/** Data. */
import users from './data/users.js';
import messages from './data/messages.js';

/** Library. */
import connectDB from '../lib/db.js';

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Message.deleteMany();

    await User.insertMany(users);
    await Message.insertMany(messages);

    console.log('Data imported.');
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Message.deleteMany();

    console.log('Data destroyed.');
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
