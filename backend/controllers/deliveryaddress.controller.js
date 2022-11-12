const { DeliveryAddressModel } = require("../models/deliveryaddress.model");

const getDeliveryAddresses = async (req, res) => {
  try {
    let deliveryAddress = await DeliveryAddressModel.find();
    res.send(deliveryAddress);
  } catch (err) {
    res.send({
      msg: "Something went wrong while fetching data to deliveryAddress",
    });
  }
};
const addDeliveryAddress = async (req, res) => {
  let newaddress = req.body;
  try {
    let product = await  DeliveryAddressModel.insertMany([newaddress]);
    res.send({ msg: "Address added successfully", newaddress: product });
  } catch (err) {
    res.send({
      msg: "Something went wrong while adding data to deliveryAddress",
    });
  }
};
const updateDeliveryAddress = async (req, res) => {
  let { id } = req.params;
  try {
    let update = req.body;
    let updatestatus = await DeliveryAddressModel.updateOne(
      { _id: id },
      { ...update }
    );
    res.send({
      msg: "deliveryAddress updated successfully",
      updatestatus,
    });
  } catch (err) {
    res.send({ msg: "Something went wrong while updating deliveryAddress" });
  }
};
const getSingleDeliveryAddress = async (req, res) => {
  let { id } = req.params;
  try {
    let address = await DeliveryAddressModel.find({ _id: id });
    res.send(address);
  } catch (err) {
    res.send({ msg: "Something went wrong while updating deliveryAddress" });
  }
};
const deleteDeliveryAddress = async (req, res) => {
  let { id } = req.params;
  try {
    let deletestatus = await DeliveryAddressModel.deleteOne({ _id: id });
    res.send({
      msg: "Address  deleted from deliveryAddress successfully",
      deletestatus,
    });
  } catch (err) {
    res.send({
      msg: "Something went wrong while deleting data from deliveryAddress",
    });
  }
};

const DeliveryAddressController = {
  getDeliveryAddresses,
  addDeliveryAddress,
  updateDeliveryAddress,
  getSingleDeliveryAddress,
  deleteDeliveryAddress,
};

module.exports = {
  DeliveryAddressController,
};
