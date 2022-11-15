import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../Errors/index.js";

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, admin, userCart } = req.body;
  const emailInUse = await User.findOne({ email });
  if (emailInUse) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: "Email already in use.",
    });
    throw new BadRequestError("Email already in use.");
  }
  if (!firstName || !lastName || !email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: "Please provide all values.",
    });
    throw new BadRequestError("Please provide all fields.");
  }
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      admin,
      userCart,
    });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    throw new BadRequestError(error);
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: "Invalid Credentials",
    });
    throw new BadRequestError("Please provide all fields.");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: "Invalid Credentials",
    });
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const passwordAuthorized = await user.comparePassword(password);
  if (!passwordAuthorized) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: "Invalid Credentials",
    });
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

const updateUserCart = async (req, res) => {
  const { userId, update } = req.body;
  try {
    const user = await User.findOne({ _id: userId });
    let updatedUser;
    if (user) {
      updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { userCart: update.userCart }
      );
    }

    res.status(StatusCodes.OK).json({ updatedUser });
  } catch (error) {
    console.log(error);
  }
};

export { registerUser, loginUser, updateUserCart };
