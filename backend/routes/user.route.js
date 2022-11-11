const {Router}=require('express');
const { UserController } = require('../controllers/user.controller');
const { authentication } = require('../middlewares/authentication.middleware');
const { authorisation } = require('../middlewares/authorisation.middleware');

const userRouter=Router();


userRouter.post('/signup',UserController.signup);
userRouter.post('/login',UserController.login);
userRouter.get('/profile',authentication,authorisation(['user','admin']),UserController.getProfile);
userRouter.put('/profile/update',authentication,authorisation(['user','admin']),UserController.updateProfile);

module.exports={
    userRouter,
}
