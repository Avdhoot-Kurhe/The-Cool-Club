const mongoose = require('mongoose');

const paymentmethodSchema= new mongoose.Schema({
    nameoncard:{type:String, required:true},
    uid:{type:String, required:true},
    cardnumber:{type:Number, required:true},
    cardtype:{type:String, required:true},
    expiry:{type:String, required:true },
    setasDefault:{type:Boolean,default:false}
},{timestamps:true});

const PaymentmethodModel=mongoose.model('paymentmethod',paymentmethodSchema);

module.exports={
    PaymentmethodModel,
}