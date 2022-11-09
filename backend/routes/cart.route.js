const {Router} = require('express');
const { CartController } = require('../controllers/cart.controller');

const cartRouter=Router();


cartRouter.get('/',CartController.getCartItems)
cartRouter.post('/addtocart',CartController.addToCart)
cartRouter.put('/:id',CartController.updateCartItem)
cartRouter.delete('/:id',CartController.deleteCartItem)

module.exports={
    cartRouter,
}