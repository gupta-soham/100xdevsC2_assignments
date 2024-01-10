const jwt = require('jsonwebtoken');
const { JWTSecret } = require('../config');


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;

    // const splitted = token.split(" ");
    // const jwtToken = splitted[1];
    const jwtToken = token.replace("Bearer ", "");

    const decodedValue =  jwt.verify(jwtToken, JWTSecret);

    if(decodedValue.username) 
        next();
    else{
        res.status(403).json({
            msg: "Incorrect Credentials for Admin"
        })
    }
}

module.exports = adminMiddleware;