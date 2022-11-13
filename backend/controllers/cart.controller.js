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

  const newproduct= await ProductModel.findOne({productimageurl: newitem.productimage})
  newproduct.productid = newproduct.id;

   console.log(newproduct.productid);
   await CartModel.insertMany([newproduct]);
    res.send({ msg: "Item added successfully" });
};
const deleteCartItem = async (req, res) => {
  let { id } = req.params;
  console.log(req.params)
  let x= await CartModel.deleteOne({productid:id});
  console.log(x)
    res.send({ msg: "item  deleted from cart successfully"});
 
};

const CartController = {
  getCartItems,
  addToCart,
  deleteCartItem,
};

module.exports = {
  CartController,
};
