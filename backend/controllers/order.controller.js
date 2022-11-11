const { OrderModel } = require("../models/Order.model");

const getOrderItems = async (req, res) => {
  try {
    let Orderitems = await OrderModel.find();
    res.send(Orderitems);
  } catch (err) {
    res.send({ msg: "Something went wrong while fetching data to Order" });
  }
};
const addToOrders = async (req, res) => {
  let newitem = req.body;
  try {
    let neworder = await  OrderModel.insertMany([newitem]);
    res.send({ msg: "Item added successfully", newitem: neworder });
  } catch (err) {
    res.send({ msg: "Something went wrong while adding data to Order" });
  }
};
const updateOrderItem = async (req, res) => {
  let { id } = req.params;
  try {
    let update = req.body;
    let updatestatus = await OrderModel.updateOne({ _id: id }, { ...update });
    res.send({ msg: "Order item updated successfully", updatestatus });
  } catch (err) {
    res.send({ msg: "Something went wrong while updating Order" });
  }
};
const deleteOrderItem = async (req, res) => {
  let { id } = req.params;
  try {
    let deletestatus = await OrderModel.deleteOne({ _id: id });
    res.send({ msg: "item  deleted from Order successfully", deletestatus });
  } catch (err) {
    res.send({ msg: "Something went wrong while deleting data from Order" });
  }
};

const OrderController = {
  getOrderItems,
  addToOrders,
  updateOrderItem,
  deleteOrderItem,
};

module.exports = {
  OrderController,
};
