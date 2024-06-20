import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  label: { type: String, required: true, trim: true, unique: true },
  value: { type: String, required: true, trim: true, unique: true },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
