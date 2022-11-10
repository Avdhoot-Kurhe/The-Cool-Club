const jwt=require('jsonwebtoken');

const authentication= async (req, res,next) => {

    const token=req.headers.authorization.split(' ')[1];
    if(!token) {
        res.send("Please Login");
    }else{
        // if token is present 
        const decode=jwt.verify(token,process.env.KEY);
        if(decode){
            next();
        }else{
            res.send("Please Login");
        }
    }
}



module.exports ={
    authentication,
}