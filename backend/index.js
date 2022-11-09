const express=require('express');
require("dotenv").config();
const cors = require('cors');
const port=process.env.PORT
const { connection } = require('./config/db.config');
const app = express();
app.use(express.json());
app.use(cors)

app.get('/',(req, res)=>{
    res.send("Welcome to the Backend!");
})






app.listen(port,async()=>{
    try{
        await connection
        console.log("Connected To MongoDB");
    }catch(e){
        console.log(404,"Couldn't connect");
    }
    console.log("connected to server")
})