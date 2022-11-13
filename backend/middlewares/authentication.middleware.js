const jwt=require('jsonwebtoken');

const authentication= async (req, res,next) => {

    const token=req.headers.authorization.split(' ')[1];
    console.log(token);
    if(!token) {
        res.send({"msg":"User not authenticated, Please Login"});
    }else{
        // if token is present 
        const decode=jwt.verify(token,process.env.KEY);
        if(decode){
            req.body.email = decode.email;
            req.body.uid=decode.uid;
            next();
        }else{
            res.send({'msg':" token expired, Please Login again",token:null});
        }
    }
}



module.exports ={
    authentication,
}