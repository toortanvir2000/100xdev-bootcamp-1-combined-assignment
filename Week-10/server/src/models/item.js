import mongoose from "mongoose";

const { Schema, model } = mongoose;

const itemSchema = new Schema({
  householdId: {
    type: Schema.Types.ObjectId,
    ref: "Household",
    required: true,
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["produce", "dairy", "meat", "pantry", "frozen", "other"],
  },
  quantity: {
    type: Number,
    default: 1,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["fresh", "expiring-soon", "expired", "used", "wasted"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Item = model("Item", itemSchema);
