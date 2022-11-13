const {Router} = require('express');
const { CartController } = require('../controllers/cart.controller');
const { authentication } = require('../middlewares/authentication.middleware');
const { authorisation } = require('../middlewares/authorisation.middleware');
const cartRouter=Router();


cartRouter.get('/',authentication,authorisation(['user','admin']),CartController.getCartItems)
cartRouter.post('/addtocart',authentication,authorisation(['user','admin']),CartController.addToCart)
cartRouter.delete('/:id',authentication,authorisation(['user','admin']),CartController.deleteCartItem)

module.exports={
    cartRouter,
}