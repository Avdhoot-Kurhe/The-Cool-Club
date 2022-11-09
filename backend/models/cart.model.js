const mongoose = require('mongoose');

const cartSchema= new mongoose.Schema({
    productid:{type:String, required:true},
    uid:{type:String, required:true},
    quantity:{type:Number, required:true},
    deliveryType:{type:String, required:true},
},{timestamps:true});

const CartModel=mongoose.model('cart',cartSchema);

module.exports={
    CartModel,
}