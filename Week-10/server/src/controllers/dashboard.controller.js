import { asyncHandler } from "../utils/asyncHandler.js";

const stats = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Stats on dashboard",
  });
});

const expiring = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Expired",
  });
});

export { stats, expiring };
