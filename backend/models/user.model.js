const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    postalcode:{type:Number, required:true},
    phone:{type:Number, required:true},
    role:{type:String, required:true}
});


const UserModel=mongoose.model('user',userSchema);

module.exports={
    UserModel,
}