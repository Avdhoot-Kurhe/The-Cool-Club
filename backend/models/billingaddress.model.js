const mongoose = require('mongoose');

const billingaddressSchema= new mongoose.Schema({
    uid:{type:String, required:true},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    address1:{type:String, required:true},
    address2:{type:String},
    country:{type:String, required:true},
    state:{type:String, required:true},
    city:{type:String, required:true},
    pincode:{type:Number, required:true},
    phone:{type:Number, required:true},
   
});

const BillingaddressModel=mongoose.model('billingaddress',billingaddressSchema);

module.exports={
    BillingaddressModel,
}