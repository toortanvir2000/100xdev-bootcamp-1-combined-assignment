import { asyncHandler } from "../utils/asyncHandler.js";

const createHousehold = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Created household",
  });
});

const joinHousehold = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Joined household",
  });
});

const yourHousehold = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "Your household",
  });
});

const allMembersInHousehold = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    message: "All members present ins household",
  });
});

export { createHousehold, joinHousehold, yourHousehold, allMembersInHousehold };
