const {Router} = require('express');
const { BillingAddressController } = require('../controllers/billingaddress.controller');
const { authentication } = require('../middlewares/authentication.middleware');
const { authorisation } = require('../middlewares/authorisation.middleware');

const billingAddressRouter=Router();


billingAddressRouter.get('/',authentication,authorisation(['user',"admin"]),BillingAddressController.getBillingAddresses)
billingAddressRouter.post('/create',authentication,authorisation(['user','admin']),BillingAddressController.addBillingAddress)
billingAddressRouter.get('/:id',authentication,authorisation(['user','admin']),BillingAddressController.getSingleBillingAddress)
billingAddressRouter.put('/:id',authentication,authorisation(['user','admin']),BillingAddressController.updateBillingAddress)
billingAddressRouter.delete('/:id',authentication,authorisation(['user','admin']),BillingAddressController.deleteBillingAddress)


module.exports={
    billingAddressRouter,
}