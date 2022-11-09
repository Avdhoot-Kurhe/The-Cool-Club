const {Router} = require('express');
const { DeliveryAddressController } = require('../controllers/deliveryaddress.controller');

const deliveryAddressRouter=Router();


deliveryAddressRouter.get('/',DeliveryAddressController.getDeliveryAddresses)
deliveryAddressRouter.post('/create',DeliveryAddressController.addDeliveryAddress)
deliveryAddressRouter.get('/:id',DeliveryAddressController.getSingleDeliveryAddress)
deliveryAddressRouter.put('/:id',DeliveryAddressController.updateDeliveryAddress)
deliveryAddressRouter.delete('/:id',DeliveryAddressController.deleteDeliveryAddress)


module.exports={
    deliveryAddressRouter,
}