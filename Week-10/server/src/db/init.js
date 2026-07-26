import mongoose from "mongoose";
import { User } from "../models/user.js";
import { Household } from "../models/household.js";
import { Item } from "../models/item.js";

const DB_STRING = `${process.env.MONGODB_URI}/mongodb?appName=ShelfLifeHouseholdInventoryTracker`;

try {
  await mongoose.connect(DB_STRING);
  const modelsToInit = [User, Household, Item];
  for (let model of modelsToInit) {
    const collectionName = model.collection.name;
    await model.createCollection();
    console.log(`Collection initialized: "${collectionName}"`);
  }
  console.log("Database initialization complete!");
} catch (err) {
  console.error(err);
} finally {
  await mongoose.disconnect();
}
