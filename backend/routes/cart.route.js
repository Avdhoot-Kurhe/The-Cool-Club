const {Router} = require('express');
const { CartController } = require('../controllers/cart.controller');
const { authorisation } = require('../middlewares/authorisation.middleware');

const cartRouter=Router();


cartRouter.get('/',authentication,authorisation(['user','admin']),CartController.getCartItems)
cartRouter.post('/addtocart',authentication,authorisation(['user']),CartController.addToCart)
cartRouter.put('/:id',authentication,authorisation(['user']),CartController.updateCartItem)
cartRouter.delete('/:id',authentication,authorisation(['user']),CartController.deleteCartItem)

module.exports={
    cartRouter,
}