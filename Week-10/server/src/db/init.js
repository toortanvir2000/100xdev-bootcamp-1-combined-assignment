import mongoose from "mongoose";
import { User } from "../models/user.js";
import { Household } from "../models/household.js";
import { Item } from "../models/item.js";

const DB_STRING = `${process.env.MONGODB_URI}/ShelfLifeHouseholdInventoryTracker`;

async function connectDB() {
  await mongoose.connect(DB_STRING);

  const modelsToInit = [User, Household, Item];
  for (const model of modelsToInit) {
    const collectionName = model.collection.name;
    await model.createCollection();
    console.log(`Collection initialized: "${collectionName}"`);
  }

  console.log("Database initialization complete!");
}

export default connectDB;