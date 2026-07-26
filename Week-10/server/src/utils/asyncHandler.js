const asyncHandler = (reqHandler) => {
  return function (req, res, next) {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
