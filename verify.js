//JUST VERIFY THE JWT RECEIVED IN HEADER, USING THE SECRET KEY, THEN ASSIGN THE TOKEN'S USER TO REQ.USER WHICH HAS ONLY AN ID FROM USERMODEL

const jwt = require('jsonwebtoken');
const secretKey  = "I'm tired";

const getUserId = (req,res,next)=>{
    const receivedToken = req.header('token')
    try {
    if(!receivedToken){
        res.status(400).send("No token in header")
    };
        const verifiedToken = jwt.verify(receivedToken,secretKey);
        //set req.user so other can get user id from it
        req.user = verifiedToken.user; //now the requests that use getUserId mwr will contain a field with user who's value will be based on the signed in user's doc id
        next();
    } catch (error) {
        res.status(404).send({error:"Catch error in verify"})
    }
};
module.exports = getUserId;