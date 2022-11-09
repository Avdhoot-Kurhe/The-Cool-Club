const {Router}=require('express');
const { UserController } = require('../controllers/user.controller');

const userRouter=Router();


userRouter.post('/signup',UserController.signup);
userRouter.post('/login',UserController.login);
userRouter.get('/profile',UserController.getProfile);
userRouter.put('/profile/update',UserController.updateProfile);

module.exports={
    userRouter,
}
