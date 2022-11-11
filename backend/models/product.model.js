const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    title:{type:String, required:true},
    subtitle:{type:String, required:true},
    category:{type:String, required:true},
    subcategory:{type:String, required:true},
    price:{type:String, required:true},
    quantity:{type:String, required:true},
    availablequantity:{type:String, required:true},
    shipit:{type:Boolean, required:true,default:true},
    pickupinstore:{type:Boolean, required:true},
    adminid:{type:String, required:true},
    overview:{type:String},
    fragrence:{type:String},
    usage:{type:String},
    moreinfo:{type:String},
    details:{type:String},
    productingradientsid:{type:String},
    bestseller:{type:Boolean},
    newarrival:{type:Boolean},
    mixnmatch:{type:String},
    discount:{type:Number},
    
},{timestamps:true});

const ProductModel=mongoose.model('product',productSchema);

module.exports={
    ProductModel,
}