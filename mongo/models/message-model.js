import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        read: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

/** Define model using user schema. */
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);
//const Message = mongoose.model('Message', messageSchema);

/** Export. */
export default Message;
