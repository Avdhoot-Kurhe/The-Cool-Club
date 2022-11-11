const { CandleModel } = require("../models/candle.product.model");

const getProduct = async (req, res) => {
  try {
    let products =await CandleModel.find({});
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
    let product = await CandleModel.insertMany([{...newProduct}]);
    res.send({ msg: "Product added successfully", NewProduct: product });
  } catch (err) {
    res.send({ msg: "Something went wrong while adding product", error: err });
  }
};
const updateProduct = async (req, res) => {
  let { id } = req.params;
  try {
    let update = req.body;
    let updatedstatus = await CandleModel.updateOne(
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
    let product = await CandleModel.find({ _id: id });
    res.send({ msg: "Product updated successfully", product });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};
const deleteProduct = async (req, res) => {
  let { id } = req.params;
  try {
    let deletestatus = await CandleModel.deleteOne({ _id: id });
    res.send({ msg: "Product deleted successfully", deletestatus });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};

const searchProduct = async (req, res) => {
  let { q } = req.query;
  try {
  // CandleModel.createIndexes({ title: "text" });
    let products = await CandleModel.find({ $search: { title: q } });
    console.log(q);
    res.send(products);
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err });
  }
};

const CandleController = {
  getProduct,
  getSingleProduct,
  searchProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
module.exports = {
  CandleController,
};