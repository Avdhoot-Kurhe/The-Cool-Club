const {Router} = require('express');
const { OrderController } = require('../controllers/order.controller');

const orderRouter=Router();


orderRouter.get('/',OrderController.getOrderItems)
orderRouter.post('/create',OrderController.addToOrders)
orderRouter.put('/:id',OrderController.updateOrderItem)
orderRouter.delete('/:id',OrderController.deleteOrderItem)

module.exports={
    orderRouter,
}