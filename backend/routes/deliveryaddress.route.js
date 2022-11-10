const {Router} = require('express');
const { DeliveryAddressController } = require('../controllers/deliveryaddress.controller');
const { authentication } = require('../middlewares/authentication.middleware');
const { authorisation } = require('../middlewares/authorisation.middleware');

const deliveryAddressRouter=Router();


deliveryAddressRouter.get('/',authentication,authorisation(['user','admin']),DeliveryAddressController.getDeliveryAddresses)
deliveryAddressRouter.get('/:id',authentication,authorisation(['user']),DeliveryAddressController.getSingleDeliveryAddress)
deliveryAddressRouter.post('/create',authentication,authorisation(['user']),DeliveryAddressController.addDeliveryAddress)
deliveryAddressRouter.put('/:id',authentication,authorisation(['user']),DeliveryAddressController.updateDeliveryAddress)
deliveryAddressRouter.delete('/:id',authentication,authorisation(['user']),DeliveryAddressController.deleteDeliveryAddress)


module.exports={
    deliveryAddressRouter,
}