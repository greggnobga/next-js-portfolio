/** Vendor. */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
    admin: {
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

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

/** Define model using user schema. */
const User = mongoose.models.User || mongoose.model('User', userSchema);

/** Export. */
export default User;
