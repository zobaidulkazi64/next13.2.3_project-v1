// models/Contact.ts
import mongoose, { Document, Model, Schema } from "mongoose";

interface IContacts extends Document {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

const ContactSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    company: {
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
    versionKey: false,
  }
);

const Contact: Model<IContacts> =
  mongoose.models.Contact ||
  mongoose.model<IContacts>("Contact", ContactSchema);

export default Contact;
