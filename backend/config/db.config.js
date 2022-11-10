const mongoose=require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.MONGODB_URL_LOCAL);
module.exports={connection}
