const mongoose = require('mongoose');

const cartSchema= new mongoose.Schema({
    productimageurl:{type:String, required:true,},
    title:{type:String, required:true}, // product main title
    subtitle:{type:String, required:true}, // product sub title
    category:{type:String, required:true}, // product category eg:Body care
    subcategory:{type:String, required:true}, // eg :All Bath & Shower, Body lotion
    price:{type:String, required:true},  // product price eg:
    quantity:{type:String, required:true}, // product quantity eg: 8 fl oz / 236 mL
    availablequantity:{type:String}, // total availble product
    shipit:{type:Boolean, required:true,default:true},
    pickupinstore:{type:Boolean, required:true,default:true,},
    overview:{type:String}, // product overview
    fragrence:{type:String}, // product fragrence
    usage:{type:String}, // product usage
    moreinfo:{type:String}, // product moreinfo
    details:{type:String}, // product details
    productingradientsid:{type:String},
    bestseller:{type:Boolean},
    newarrival:{type:Boolean},
    mixnmatch:{type:String},
    discount:{type:Number},
},{timestamps:true});

const CartModel=mongoose.model('cart',cartSchema);

module.exports={
    CartModel,
}