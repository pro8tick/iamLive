import Category from "../models/category.model.js";

export const fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const createCategory = async (req, res) => {
  try {
    const doc = await Category.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
