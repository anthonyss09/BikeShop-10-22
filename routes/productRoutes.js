import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProducts,
  getProduct,
  createCheckoutSession,
} from "../controllers/productController.js";

router.route("/all-products").get(getAllProducts);
router.route("/:productId").get(getProduct);
router.route("/add-product").post(createProduct);
router.route("/create-checkout-session").post(createCheckoutSession);

export default router;
