const {Router} = require('express');
const { ProductController } = require('../controllers/product.controller');
const { authentication } = require('../middlewares/authentication.middleware');
const { authorisation } = require('../middlewares/authorisation.middleware');

const productRouter=Router();


productRouter.get('/',ProductController.getProduct)
productRouter.get('/search',ProductController.searchProduct)
productRouter.get('/:id',ProductController.getSingleProduct)
productRouter.post('/create',authentication,authorisation(['admin']),ProductController.addProduct)
productRouter.put('/:id',authentication,authorisation(['admin']),ProductController.updateProduct)
productRouter.delete('/:id',authentication,authorisation(['admin']),ProductController.deleteProduct)


module.exports={
    productRouter,
}