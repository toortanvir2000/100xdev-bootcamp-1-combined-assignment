import chalk from "chalk";

const errorHandler = (err, req, res, next) => {
  console.error(chalk.bgRed(`[ERROR]: ${err}`));

  const statusCode = err?.statusCode || err?.status || 500;
  const message = err?.message || "Internal Server Error";

  res.status(statusCode).json({
    message,
  });
};

export default errorHandler;
