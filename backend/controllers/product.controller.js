const { ProductModel } = require("../models/product.model");

const getProduct = async (req, res) => {
  try {
    let products =await ProductModel.find({});
    res.send(products);
  } catch (err) {
    res.send({ msg: "Something went wrong while fetching products", error: err });
  }
};
const addProduct = async (req, res) => {
  let newProduct = req.body;
  newProduct.adminid=req.body.uid;
  console.log(newProduct);
  try {
    let product = await ProductModel.insertMany([{...newProduct}]);
    res.send({ msg: "Product added successfully", NewProduct: product });
  } catch (err) {
    res.send({ msg: "Something went wrong while adding product", error: err });
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
const getSingleProduct = async (req, res) => {
  let { id } = req.params;
  try {
    let product = await ProductModel.find({ _id: id });
    res.send({ msg: "Product updated successfully", product });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};
const deleteProduct = async (req, res) => {
  let { id } = req.params;
  try {
    let deletestatus = await ProductModel.deleteOne({ _id: id });
    res.send({ msg: "Product deleted successfully", deletestatus });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};

const searchProduct = async (req, res) => {
  let { q } = req.query;
  try {
  // ProductModel.createIndexes({ title: "text" });
    let products = await ProductModel.find({ $search: { title: q } });
    console.log(q);
    res.send(products);
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};

const ProductController = {
  getProduct,
  getSingleProduct,
  searchProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
module.exports = {
  ProductController,
};
