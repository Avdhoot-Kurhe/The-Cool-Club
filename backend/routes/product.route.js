const {Router} = require('express');
const { ProductController } = require('../controllers/product.controller');

const productRouter=Router();


productRouter.get('/',ProductController.getProduct)
productRouter.get('/search',ProductController.searchProduct)
productRouter.post('/create',ProductController.addProduct)
productRouter.get('/:id',ProductController.getSingleProduct)
productRouter.put('/:id',ProductController.updateProduct)
productRouter.delete('/:id',ProductController.deleteProduct)


module.exports={
    productRouter,
}