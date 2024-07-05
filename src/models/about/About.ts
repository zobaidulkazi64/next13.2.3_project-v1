// models/Post.ts
import mongoose, { Document, Model, Schema } from "mongoose";

interface IBlog extends Document {
  title: string;
  desc: string;
  img: string;
  date: string;
  href: string;
}
