const {Router} = require('express');
const { BillingAddressController } = require('../controllers/billingaddress.controller');

const billingAddressRouter=Router();


billingAddressRouter.get('/',BillingAddressController.getBillingAddresses)
billingAddressRouter.post('/create',BillingAddressController.addBillingAddress)
billingAddressRouter.get('/:id',BillingAddressController.getSingleBillingAddress)
billingAddressRouter.put('/:id',BillingAddressController.updateBillingAddress)
billingAddressRouter.delete('/:id',BillingAddressController.deleteBillingAddress)


module.exports={
    billingAddressRouter,
}