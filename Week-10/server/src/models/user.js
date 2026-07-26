import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  householdId: {
    type: Schema.Types.ObjectId,
    ref: "Household",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const User = model("User", userSchema);
