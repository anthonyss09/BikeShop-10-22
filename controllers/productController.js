import Product from "../models/productModel.js";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../Errors/index.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

const getProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      throw new NotFoundError(
        "No product with id: " + { productId } + "found."
      );
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const createProduct = async (req, res) => {
  const { name, manufactuer, price, type, imageName } = req.body;
  const { admin } = req.headers;
  if (!admin) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  if (!name) {
    throw new BadRequestError("Please provide all values.");
  }
  // const { image } = req.file;

  try {
    const newProduct = await Product.create({
      name,
      image: imageName,
      manufactuer,
      price,
      type,
    });
    res.status(StatusCodes.OK).json({ newProduct });
    console.log(newProduct);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export { createProduct, getAllProducts, getProduct };
