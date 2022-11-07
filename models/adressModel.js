import mongoose from "mongoose";
import validator from "validator";

export const AdressSchema = new mongoose.Schema({
  streetAdress: {
    type: String,
    required: [true, "Please provide street adress."],
  },
  city: {
    type: String,
    required: [true, "Please provide city."],
  },
  postCode: {
    type: String,
    required: [true, "Please provide post code."],
  },
  state: {
    type: String,
    required: [true, "Please provide state."],
  },
});

export default mongoose.model("Adress", AdressSchema);
