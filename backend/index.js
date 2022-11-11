const express=require('express');
require("dotenv").config();
const cors = require('cors');
const port=process.env.PORT
const { connection } = require('./config/db.config');
const { userRouter } = require('./routes/user.route');
const { productRouter } = require('./routes/product.route');
const { cartRouter } = require('./routes/cart.route');
const { deliveryAddressRouter } = require('./routes/deliveryaddress.route');
const { billingAddressRouter } = require('./routes/billingaddress.route');
const { orderRouter } = require('./routes/order.route');
const { reviewRouter } = require('./routes/review.route');
const { paymentMethodRouter } = require('./routes/paymentmethod.route');
const { candleRouter } = require('./routes/candle.route');
const app = express();
app.use(cors());
app.use(express.json())


app.get('/',(req, res)=>{
    res.send("Welcome to the Backend!");
})

app.use('/user',userRouter);
app.use('/products',productRouter);
app.use('/cart',cartRouter);
app.use('/myorders',orderRouter);
app.use('/deliveryAddress',deliveryAddressRouter);
app.use('/billingAddress',billingAddressRouter);
app.use('/reviews',reviewRouter);
app.use('/paymentmethod',paymentMethodRouter);
app.use('/candle',candleRouter);



app.listen(port,async()=>{
    try{
        await connection
        console.log("Connected To MongoDB");
    }catch(e){
        console.log(404,"Couldn't connect");
    }
    console.log(`listening on port ${port}`)
})