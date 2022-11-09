const { CartModel } = require("../models/cart.model");

const getCartItems = async (req, res) => {
  try {
    let cartitems = await CartModel.find();
    res.send(cartitems);
  } catch (err) {
    res.send({ msg: "Something went wrong while fetching data to cart" });
  }
};
const addToCart = async (req, res) => {
  let newitem = req.body;
  try {
    let product = await new CartModel.insertMany([newitem]);
    res.send({ msg: "Item added successfully", newitem: product });
  } catch (err) {
    res.send({ msg: "Something went wrong while adding data to cart" });
  }
};
const updateCartItem = async (req, res) => {
  let { id } = req.params;
  try {
    let update = req.body;
    let updatestatus = await CartModel.updateOne({ _id: id }, { ...update });
    res.send({ msg: "cart item updated successfully", updatestatus });
  } catch (err) {
    res.send({ msg: "Something went wrong while updating cart" });
  }
};
const deleteCartItem = async (req, res) => {
  let { id } = req.params;
  try {
    let deletestatus = await CartModel.deleteOne({ _id: id });
    res.send({ msg: "item  deleted from cart successfully", deletestatus });
  } catch (err) {
    res.send({ msg: "Something went wrong while deleting data from cart" });
  }
};

const CartController = {
  getCartItems,
  addToCart,
  updateCartItem,
  deleteCartItem,
};

module.exports = {
  CartController,
};
