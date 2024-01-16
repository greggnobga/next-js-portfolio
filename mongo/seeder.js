/** Vendor. */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

/** Models. */
import User from './models/user-model.js';
import Message from './models/message-model.js';
import Project from './models/project-model.js';

/** Data. */
import users from './data/users.js';
import messages from './data/messages.js';
import projects from './data/projects.js';

/** Run dotenv config. */
dotenv.config();

const importData = async () => {
    await mongoose.connect(process.env.MONGO_SEEDER_URI, {});

    try {
        await User.deleteMany();
        await Message.deleteMany();
        await Project.deleteMany();

        await User.insertMany(users);
        await Message.insertMany(messages);
        await Project.insertMany(projects);

        console.log('Data imported.');
        process.exit();
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    await mongoose.connect(process.env.MONGO_SEEDER_URI, {});

    try {
        await User.deleteMany();
        await Message.deleteMany();
        await Project.deleteMany();

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
