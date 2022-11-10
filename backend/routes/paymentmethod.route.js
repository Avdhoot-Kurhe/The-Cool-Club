const {Router} = require('express');
const { PaymentMethodController } = require('../controllers/paymentmethod.controller');

const paymentMethodRouter=Router();

paymentMethodRouter.get('/',PaymentMethodController.getPaymentMethod)
paymentMethodRouter.post('/create',PaymentMethodController.addPaymentMethod)
paymentMethodRouter.put('/:id',PaymentMethodController.updatePaymentMethod)
paymentMethodRouter.delete('/:id',PaymentMethodController.deletePaymentMethod)



module.exports={
    paymentMethodRouter,
}