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
    throw new BadRequestError("Email already in use.");
  }
  if (!firstName || !lastName || !email || !password) {
    throw new BadRequestError("Please provide all fields.");
  }
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
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all fields.");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const passwordAuthorized = await user.comparePassword(password);
  if (!passwordAuthorized) {
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
