const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config();

const verifyToken = (req,res) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token){
        return false
    }
    try{
        const decode = jwt.verify(token,process.env.TOKEN_KEY);
        req.user = decode;  
        return true
    }catch(err){
        return false
    }
}

module.exports = verifyToken;