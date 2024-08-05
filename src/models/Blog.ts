import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    bId: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    image: { type: String },
    url: { type: String },
    tags: { type: [String], required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
