const mongoose = require('mongoose');

const billingaddressSchema= new mongoose.Schema({
    productid:{type:String, required:true},
    uid:{type:String, required:true},
   
},{timestamps:true});

const BillingaddressModel=mongoose.model('billingaddress',billingaddressSchema);

module.exports={
    BillingaddressModel,
}