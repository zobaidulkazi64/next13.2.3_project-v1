import mongoose from "mongoose";

const dbConnection = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI as string || "mongodb://localhost:27017/zobkazi.github.io");
};

export default dbConnection;
