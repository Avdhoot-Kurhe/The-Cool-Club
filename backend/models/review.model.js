const mongoose = require('mongoose');

const reviewSchema= new mongoose.Schema({
    productid:{type:String, required:true},
    uid:{type:String, required:true},
    star:{type:Number, required:true},
    title:{type:String},
    comment:{type:String},
},{timestamps:true});

const ReviewModel=mongoose.model('review',reviewSchema);

module.exports={
    ReviewModel,
}