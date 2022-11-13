const { CartModel } = require("../models/cart.model");
const { ProductModel } = require("../models/product.model");

const getCartItems = async (req, res) => {
  try {
    let cartitems = await CartModel.find({});
    res.send(cartitems);
  } catch (err) {
    res.send({ msg: "Something went wrong while fetching data to cart",err });
  }
};
const addToCart = async (req, res) => {
  let newitem = req.body;

  let newproduct= await ProductModel.findOne({productimageurl: newitem.productimage})
  console.log(newproduct); 
   await CartModel.insertMany([newproduct]);
    res.send({ msg: "Item added successfully" });
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
  deleteCartItem,
};

module.exports = {
  CartController,
};
