import { Schema, model } from "mongoose";
import { User } from "./User.js";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: "",
  },
  user: {
    type: User.schema,
  },
});

export const Product = model("Product", ProductSchema);
