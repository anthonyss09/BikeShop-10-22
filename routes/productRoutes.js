import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controllers/productController.js";

router.route("/all-products").get(getAllProducts);
router.route("/:productId").get(getProduct);
router.route("/add-product").post(createProduct);

export default router;
