const { ProductModel } = require("../models/product.model");

const getProduct = async (req, res) => {
  try {
    let products = ProductModel.find();
    res.send(products);
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};
const addProduct = async (req, res) => {
  let newProduct = req.body;
  try {
    let product = new ProductModel.insertMany([newProduct]);
    res.send({ msg: "Product added successfully", NewProduct: product });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};
const updateProduct = async (req, res) => {
  let { id } = req.params;
  try {
    let update = req.body;
    let updatedstatus = await ProductModel.updateOne(
      { _id: id },
      { ...update }
    );
    res.send({ msg: "Product updated successfully", updatedstatus });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};
const deleteProduct = async (req, res) => {
  let { id } = req.params;
  try {
    let deletestatus = await ProductModel.deleteOne({ _id: id });
    res.send({ msg: "Prodcut deleted successfully", deletestatus });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};

const searchProduct = async (req, res) => {
  let { q } = req.query;
  try {
    ProductModel.createIndexes({ title: "text" });
    let products = await ProductModel.find({ title: { $regex: q } });
    console.log(q);
    res.send(products);
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};

const ProductController = {
  getProduct,
  searchProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
