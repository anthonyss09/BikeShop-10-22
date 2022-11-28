import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  updateUserCart,
} from "../controllers/authController.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/updateUserCart").patch(updateUserCart);

export default router;
