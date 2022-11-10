const getPaymentMethod = async (req, res) => {
  try {
  } catch (e) {
    res.send("somthing went wrong on fetching card data");
  }
};
const addPaymentMethod = async (req, res) => {
  try {
  } catch (e) {
    res.send("somthing went wrong on adding card data");
  }
};
const updatePaymentMethod = async (req, res) => {
  try {
  } catch (e) {
    res.send("somthing went wrong on updating card data");
  }
};
const deletePaymentMethod = async (req, res) => {
  try {
  } catch (e) {
    res.send("somthing went wrong on deleting card data");
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
}