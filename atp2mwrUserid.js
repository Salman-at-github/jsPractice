
//fetchUserID middleware to convert the token back to the user object

const jwt = require('jsonwebtoken');
const secretKey = "I'm broke";

const getUserIdMwr = (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        res.status(400).json("No token found in head")
    }
    else {
        try {
            const decryptedToken = jwt.verify(token, secretKey)
            if (!decryptedToken) {
                res.status(400).json({ error: "Token verification failed" });
            }
            else { //token verified, so assign the user we got from token to req.user

                req.user = decryptedToken.user;
                next();

            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = getUserIdMwr;