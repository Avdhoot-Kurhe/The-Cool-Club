const {Router} = require('express');
const { ReviewController } = require('../controllers/review.controller');

const reviewRouter=Router();


reviewRouter.get('/:productid',ReviewController.getReviews)
reviewRouter.post('/create',ReviewController.getReviews)
reviewRouter.put('/:id',ReviewController.getReviews)
reviewRouter.delete('/:id',ReviewController.getReviews)




module.exports={
    reviewRouter,
}