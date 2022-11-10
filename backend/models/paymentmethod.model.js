const mongoose = require('mongoose');

const paymentmethodSchema= new mongoose.Schema({
    nameoncard:{type:String, required:true},
    uid:{type:String, required:true},
    cardnumber:{type:Number, required:true},
    cardtype:{type:String, required:true},
    expiry:{type:Date, required:true},
    setasDefault:{type:Boolean}
},{timestamps:true});

const PaymentmethodModel=mongoose.model('paymentmethod',paymentmethodSchema);

module.exports={
    PaymentmethodModel,
}