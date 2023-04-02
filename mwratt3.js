const jwt = require('jsonwebtoken');
const secretKey = "Boring";
const mwrGetUserId = (req, res, next) => {
    const receivedToken = req.header('token');
    if (!receivedToken) {
        res.status(400).json("No token in head")
    }
    else {
        decodedToken = jwt.verify(receivedToken, secretKey);
        if (!decodedToken) {
            res.status(400).json("Token decoding failed")
        }
        else {
            req.user = decodedToken.user;
            next();
        }
    }
}
module.exports = mwrGetUserId;