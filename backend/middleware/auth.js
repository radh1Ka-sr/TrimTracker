const jwt = require('jsonwebtoken');
//const SECRET = "pratik"
require('dotenv').config();
function authenticateJwt(req,res,next){
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
        if(err) return  res.send({
            message:"Token is not valid please login",
            status:2
        })
        if(decode){
        
            req.user = decode;
            // console.log(decode);
            next()
        }else{
            res.send({
                message:"Token is not valid please login",
                status:2
            })
        }
    })  
  };
  
  module.exports = {
      authenticateJwt,
  }