import { asyncHandler } from "../utils/asyncHandler.js";

const items = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Household items",
  });
});

const createItem = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Created new household item",
  });
});

const updateItem = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Updated household item",
  });
});

const updateStatus = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Updated status of household item",
  });
});

const removeItem = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Removed household item",
  });
});

export { items, createItem, updateItem, updateStatus, removeItem };
