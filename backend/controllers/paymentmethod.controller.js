const { PaymentmethodModel } = require("../models/paymentMethod.model");

const getPaymentMethod = async (req, res) => {
  let { uid } = req.body;
  try {
    let paymentMethod = await PaymentmethodModel.find({ uid: id });
    res.send(paymentMethod);
  } catch (e) {
    res.send("something went wrong on fetching payment data");
  }
};
const addPaymentMethod = async (req, res) => {
  let paymentData = req.body;

  try {
    let newPaymentDataStatus = await  PaymentmethodModel.insertMany([
      paymentData,
    ]);
    res.send({ msg: "Payment data added successfully", newPaymentDataStatus });
  } catch (e) {
    res.send("something went wrong on adding payment data");
  }
};
const updatePaymentMethod = async (req, res) => {
  let { uid } = req.body;
  let { id } = req.params;
  try {
    let updatestatus=await PaymentmethodModel.updateOne({$and:{_id:id,uid:uid}});
    res.send({"msg":"Payment data updated successfully",updatestatus})

  } catch (e) {
    res.send("something went wrong on updating payment data");
  }
};
const deletePaymentMethod = async (req, res) => {
  let { uid } = req.body;
  let { id } = req.params;
  try {
    let updatestatus=await PaymentmethodModel.deleteOne({$and:{_id:id,uid:uid}});
    res.send({"msg":"Payment data deleted successfully",updatestatus})

  } catch (e) {
    res.send("something went wrong on deleting payment data");
  }
};

const PaymentMethodController = {
  getPaymentMethod,
  addPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};
module.exports = {
  PaymentMethodController,
};
