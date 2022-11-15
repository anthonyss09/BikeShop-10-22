import Product from "../models/productModel.js";
import mongoose from "mongoose";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51LuIXnA3543f5hOkxXS8ewm1AlEMJzEqt4MHBGrV3je1IfiFwiixpp94FqHW5SHOatZri2sboL9JFk6AamlBTw7H00cX6LsqY8"
);
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../Errors/index.js";
import { useAccordionButton } from "react-bootstrap";
import { response } from "express";

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
  const { isadmin } = req.headers;

  if (isadmin === "false") {
    throw new UnauthenticatedError("Invalid credentials");
  }
  if (!name || !manufactuer || !price || !type) {
    throw new BadRequestError("Please provide all values.");
  }

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

const createCheckoutSession = async (req, res) => {
  const PRICE = (req.body.cartTotal * 100).toFixed(0);
  const DOMAIN = "http://localhost:3000/cart";

  const product = await stripe.products.create({
    active: true,
    name: "productTotal",
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: PRICE,
    currency: "usd",
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: price.id,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${DOMAIN}?success=true`,
    cancel_url: `${DOMAIN}?canceled=true`,
  });

  res.status(StatusCodes.OK).json({ sessionUrl: session.url });
};
export { createProduct, getAllProducts, getProduct, createCheckoutSession };
