const {Router} = require('express');
const { ReviewController } = require('../controllers/review.controller');
const { authentication } = require('../middlewares/authentication.middleware');
const { authorisation } = require('../middlewares/authorisation.middleware');

const reviewRouter=Router();


reviewRouter.get('/:productid',authentication,authorisation(['user','admin']),ReviewController.getReviews)
reviewRouter.get('/:productid',authentication,authorisation(['user','admin']),ReviewController.noOfReviews)
reviewRouter.get('/:productid',authentication,authorisation(['user','admin']),ReviewController.noOfStars)
reviewRouter.post('/create',authentication,authorisation(['user','admin']),ReviewController.addReviews)
reviewRouter.put('/:id',authentication,authorisation(['user','admin']),ReviewController.updateReviews)
reviewRouter.delete('/:id',authentication,authorisation(['user','admin']),ReviewController.deleteReviews)




module.exports={
    reviewRouter,
}