import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authHandler = async (req, res, next) => {
  if (req.url.endsWith("/api/auth/register")) return next();

  const authToken = req.cookies["auth-token"];
  if (!authToken) {
    const error = new Error("auth-token is missing");
    error.statusCode = 401;
    throw error;
  }
  const decryptedAuthToken =
    authToken &&
    jwt.verify(authToken, JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        const error = new Error("auth-token passed is invalid");
        error.statusCode = 401;
        throw error;
      }
      return decoded;
    });
  const user = await User.findOne({
    name: decryptedAuthToken.name,
    email: decryptedAuthToken.email,
    password: decryptedAuthToken.hashedPassword,
  });
  if (user) {
    next();
  } else {
    const error = new Error("user does not have access to our system");
    error.statusCode = 401;
    throw error;
  }
};

export default authHandler;
