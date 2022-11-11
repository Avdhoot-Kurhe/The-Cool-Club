const {Router} = require('express');
const { OrderController } = require('../controllers/order.controller');
const { authentication } = require('../middlewares/authentication.middleware');
const { authorisation } = require('../middlewares/authorisation.middleware');
const orderRouter=Router();


orderRouter.get('/',authentication,authorisation(['user','admin']),OrderController.getOrderItems)
orderRouter.post('/create',authentication,authorisation(['user','admin']),OrderController.addToOrders)
orderRouter.put('/:id',authentication,authorisation(['user','admin']),OrderController.updateOrderItem)
orderRouter.delete('/:id',authentication,authorisation(['user','admin']),OrderController.deleteOrderItem)

module.exports={
    orderRouter,
}