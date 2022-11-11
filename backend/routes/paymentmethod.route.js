const {Router} = require('express');
const { PaymentMethodController } = require('../controllers/paymentmethod.controller');
const { authentication } = require('../middlewares/authentication.middleware');
const { authorisation } = require('../middlewares/authorisation.middleware');

const paymentMethodRouter=Router();

paymentMethodRouter.get('/',authentication,authorisation(['user','admin']),PaymentMethodController.getPaymentMethod)
paymentMethodRouter.post('/create',authentication,authorisation(['user','admin']),PaymentMethodController.addPaymentMethod)
paymentMethodRouter.put('/:id',authentication,authorisation(['user','admin']),PaymentMethodController.updatePaymentMethod)
paymentMethodRouter.delete('/:id',authentication,authorisation(['user','admin']),PaymentMethodController.deletePaymentMethod)



module.exports={
    paymentMethodRouter,
}