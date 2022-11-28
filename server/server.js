import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./Db/connect.js";
import "express-async-errors";
import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";
import upload from "./utils/fileUpload.js";

app.use(express.json());

//middleware

//routes
app.use("/api/auth", authRouter);
app.use("/api/products", upload.single("image"), productRouter);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("welcome to the bike shop.");
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
