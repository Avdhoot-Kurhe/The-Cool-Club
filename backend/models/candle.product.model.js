const mongoose = require('mongoose');

const candleSchema= new mongoose.Schema({
    id:{type:String, required:true},
    image:{type:String, required:true},
    title:{type:String, required:true},
    subcategory:{type:String, required:true},
    price:{type:String, required:true},
    offer:{type:String}
},)

const CandleModel=mongoose.model('candle',candleSchema);

module.exports={
    CandleModel,
}