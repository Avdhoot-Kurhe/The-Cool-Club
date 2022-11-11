const {Router} = require('express');
const { CandleController } = require('../controllers/candle.controller');
const { authentication } = require('../middlewares/authentication.middleware');
const { authorisation } = require('../middlewares/authorisation.middleware');

const candleRouter=Router();


candleRouter.get('/',CandleController.getProduct)
candleRouter.get('/search',CandleController.searchProduct)
candleRouter.get('/:id',CandleController.getSingleProduct)
candleRouter.post('/create',authentication,authorisation(['admin']),CandleController.addProduct)
candleRouter.put('/:id',authentication,authorisation(['admin']),CandleController.updateProduct)
candleRouter.delete('/:id',authentication,authorisation(['admin']),CandleController.deleteProduct)


module.exports={
    candleRouter,
}