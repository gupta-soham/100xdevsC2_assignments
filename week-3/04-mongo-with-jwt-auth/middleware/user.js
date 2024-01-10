const jwt = require('jsonwebtoken');
const { JWTSecret } = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;

    const splitted = token.split(" ");
    const jwtToken = splitted[1];

    const decodedValue =  jwt.verify(jwtToken, JWTSecret);

    if(decodedValue.username) {
        req.username = decodedValue.username;
        next();
    }
    else{
        res.status(403).json({
            msg: "Incorrect Credentials for User"
        })
    }
}

module.exports = userMiddleware;