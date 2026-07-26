import mongoose from "mongoose";

const { Schema, model } = mongoose;

const householdSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  inviteCode: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
    maxLength: 6,
    uppercase: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  wasteScore: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Household = model("Household", householdSchema);
