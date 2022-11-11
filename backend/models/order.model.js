const mongoose = require('mongoose');

const orderSchema= new mongoose.Schema({
    productid:{type:String, required:true},
    uid:{type:String, required:true},
    quantity:{type:Number, required:true},
    deliveryType:{type:String, required:true},
    deliveryAddressid:{type:String, required:true},
    deliveryStatus:{type:String, required:true},
    paymentid:{type:String, required:true},
    productTitle:{type:String, required:true},
    price:{type:Number, required:true},
    productImageurl:{type:String},
    invoice:{type:String, },
},{timestamps:true});

const OrderModel=mongoose.model('order',orderSchema);

module.exports={
    OrderModel,
}