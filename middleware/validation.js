require('dotenv').config();
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        console.log(token);
        token= authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token, "your-secret-key", (err,decoded)=>{
        if(err) {
        res.status(401) ;}
        console.log(decoded)
        req.user=decoded;
        next();
    }
    
    );
}
if(!token){
    res.status(400)
}
});

module.exports=validateToken;

