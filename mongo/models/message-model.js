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
    message: {
      type: String,
      required: true,
    },
    isRead: {
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

/** Export. */
export default Message;
