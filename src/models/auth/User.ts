// User.ts
import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  username?: string;
  name?: string;
  avatar?: string;
  bio?: string;
  website?: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
});

const User = model<IUser>("User", userSchema);
export default User;