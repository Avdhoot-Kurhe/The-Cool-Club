const mongoose = require('mongoose');

const deliveryaddressSchema= new mongoose.Schema({
    uid:{type:String, required:true},
    address:{type:String, required:true},
    pincode:{type:String, required:true},
},{timestamps:true});

const DeliveryAddressModel=mongoose.model('deliveryaddress',deliveryaddressSchema);

module.exports={
    DeliveryAddressModel,
}