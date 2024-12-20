var express = require('express');
var router = express.Router();
var users =require('../controller/UserController');

router.get('/', function(req,res,next) {
    console.log('/user routes');
    let user = {
        name: 'Someone',
        age: 20
    };
    res.json(user);
});

// router.get('/something', function(req,res,next) {

// });

router.post('/register', users.register);
router.post('/login', users.login);


module.exports = router;