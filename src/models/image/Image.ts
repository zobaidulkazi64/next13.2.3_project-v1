// models/Post.ts
import mongoose, { Document, Model, Schema } from "mongoose";

interface IImage extends Document {
  filename: string;
  path: string;
  originalName: string;
  mimetype: string;
  size: number;
}

const imageSchema: Schema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
    },
    mimetype: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Image: Model<IImage> =
  mongoose.models.Blog || mongoose.model<IImage>("Image", imageSchema);

export default Image;
