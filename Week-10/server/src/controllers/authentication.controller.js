import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/user.js";

const SALT = process.env.HASH_SALT;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const registerUser = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (password.length < 6) {
      return res.status(422).json({
        message: "Password should be of a minimum 6 characters.",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number.parseInt(SALT, 10),
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      createdAt: Date.now(),
      householdId: null,
    });

    const token = jwt.sign(
      {
        name,
        email,
        hashedPassword,
      },
      JWT_SECRET_KEY,
    );

    res.cookie("auth-token", token, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });
    res.status(200).json({
      message: "Successful",
      userId: user["_id"]
    });
  } catch (e) {
    if (e?.["errorResponse"]?.["code"] === 11000) {
      return res.status(400).json({
        message: "email already exists in db",
      });
    }
    throw e;
  }
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const userData = await User.findOne({ email });
  const validateLogin = await bcrypt.compare(password, userData["password"]);
  if (validateLogin) {
    res.status(200).json({
      message: "successful",
      userId: userData["_id"],
    });
  } else {
    res.status(401).json({
      message: "invalid username or password",
    });
  }
});

export { registerUser, loginUser };
