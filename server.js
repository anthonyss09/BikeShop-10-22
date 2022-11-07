import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./Db/connect.js";
import "express-async-errors";

//middleware

//routes

import morgan from "morgan";

app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("welcome to the bike shop bitches");
});

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
