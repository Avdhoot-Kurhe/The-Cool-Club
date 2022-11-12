const { BillingaddressModel } = require("../models/billingaddress.model");

const getBillingAddresses = async (req, res) => {
  try {
    let BillingAddress = await BillingaddressModel.find();
    res.send(BillingAddress);
  } catch (err) {
    res.send({
      msg: "Something went wrong while fetching data to BillingAddress",
    });
  }
};
const addBillingAddress = async (req, res) => {
  let newaddress = req.body;
  try {
    let address = await  BillingaddressModel.insertMany([newaddress]);
    res.send({ msg: "Address added successfully", newaddress: address });
  } catch (err) {
    res.send({
      msg: "Something went wrong while adding data to BillingAddress",
    });
  }
};
const updateBillingAddress = async (req, res) => {
  let { id } = req.params;
  try {
    let update = req.body;
    let updatestatus = await BillingaddressModel.updateOne(
      { _id: id },
      { ...update }
    );
    res.send({
      msg: "BillingAddress  updated successfully",
      updatestatus,
    });
  } catch (err) {
    res.send({ msg: "Something went wrong while updating BillingAddress" });
  }
};
const getSingleBillingAddress = async (req, res) => {
  let { id } = req.params;
  try {
    let address = await BillingaddressModel.find({ _id: id });
    res.send(address);
  } catch (err) {
    res.send({ msg: "Something went wrong while updating BillingAddress" });
  }
};
const deleteBillingAddress = async (req, res) => {
  let { id } = req.params;
  try {
    let deletestatus = await BillingaddressModel.deleteOne({ _id: id });
    res.send({
      msg: "Address  deleted from BillingAddress successfully",
      deletestatus,
    });
  } catch (err) {
    res.send({
      msg: "Something went wrong while deleting data from BillingAddress",
    });
  }
};

const BillingAddressController = {
  getBillingAddresses,
  addBillingAddress,
  updateBillingAddress,
  getSingleBillingAddress,
  deleteBillingAddress,
};

module.exports = {
  BillingAddressController,
};
