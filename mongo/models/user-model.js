/** Vendor. */
import mongoose from 'mongoose';

/** Create user schema. */
const userSchema = mongoose.Schema(
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
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
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
const User = mongoose.models.User || mongoose.model('User', userSchema);

/** Export. */
export default User;
