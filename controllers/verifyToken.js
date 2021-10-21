const jwt=require('jsonwebtoken')

const JWTSECRET = 'harshapriyaamreenkousar'

function verifyToken(req,res,next){
    
  
    if(!req.headers.authorization){
        return res.status(401).send("Unauthorized request")
    }
   let token = Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString()
    if(token == null)
    {
        return res.send({status:"Unauthorized request"})
    }
    else{
    let payload = jwt.verify(token, JWTSECRET)
    console.log(payload)
    if(!payload)
    {
        return res.send({status:"Unauthorized request"})
    }
else{
    //return res.json({status:'success'});
   next()
    }


}
   
}

module.exports=verifyToken