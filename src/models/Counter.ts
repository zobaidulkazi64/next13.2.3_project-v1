// models/Counter.ts
import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  count: { type: Number, required: true },
});

const Counter =
  mongoose.models.Counter || mongoose.model("Counter", CounterSchema);

export default Counter;
