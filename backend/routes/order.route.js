const {Router} = require('express');
const { OrderController } = require('../controllers/order.controller');

const orderRouter=Router();


orderRouter.get('/',authentication,authorisation(['user','admin']),OrderController.getOrderItems)
orderRouter.post('/create',authentication,authorisation(['user']),OrderController.addToOrders)
orderRouter.put('/:id',authentication,authorisation(['user','admin']),OrderController.updateOrderItem)
orderRouter.delete('/:id',authentication,authorisation(['user']),OrderController.deleteOrderItem)

module.exports={
    orderRouter,
}