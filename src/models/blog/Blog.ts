// models/Post.ts
import mongoose, { Document, Model, Schema } from "mongoose";

interface IBlog extends Document {
  title: string;
  desc: string;
  img: string;
  date: string;
  href: string;
}

const blogSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 1500,
    trim: true,
  },
  img: {
    type: String,
      required: true,
      trim: true,
      default: "https://picsum.photos/200/300",
  },
  href: {
    type: String,
      required: true,
      trim: true,
      default: "https://picsum.photos/200/300",
  },
}, {
  timestamps: true,
});

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
