const jwt = require('jsonwebtoken');
const {config} = require('../config/Config');

function verifyUserToken(req,res,next) {
    let token = req.headers.authorization;
    if(!token) {
        res.status(401).send('Not authorized').end();
    }
    
    try{
        token = token.split(' ')[1];
        if(token == null || !token) return res.status(401).send('Unauthorized request').end();
        let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);
        if(!verifiedUser) return res.status(401).send('Unauthorized request');
        console.log('verified user', verifiedUser);
        req.user = verifiedUser;
        next();
    }catch(error) {
        res.status(401).send('Invalid Token');
    }

    
}

module.exports = {
    verifyUserToken
};