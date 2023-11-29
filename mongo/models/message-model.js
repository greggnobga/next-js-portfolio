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
  },
  {
    timestamps: true,
  },
);

/** Define model using user schema. */
const Message = mongoose.model('Message', messageSchema);

/** Export. */
export default Message;
