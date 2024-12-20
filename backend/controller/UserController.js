const userService = require('../services/UserService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {config} = require('../config/Config');

async function register(req,res) {
    let username = req.body.username;
    let password = req.body.password;
    try {   
        let user = await userService.register(username,password);
        let payload = {id: user._id};
        const token = jwt.sign(payload, config.TOKEN_SECRET); // token generate
        res.status(201).send({
            token
        });
    }catch(err) {
        res.status(400).json({
            errorMessage: err.toString()
        })
    }
}

async function login(req,res) {
    let username = req.body.username;
    let password = req.body.password;
    try {   
        let user = await userService.login(username,password);
        console.log(user)
        let payload = {id: user._id};
        const token = jwt.sign(payload, config.TOKEN_SECRET); // token generate
        res.status(200).send({
            token
        });
    }catch(err) {
        // 401 unauthenticate => access forbidden
        res.status(401).json({
            errorMessage: err.toString()
        })
    }
}

module.exports = {
    register,
    login
}