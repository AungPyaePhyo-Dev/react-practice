var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    console.log('First Route');
    next();
})

router.get('/', function(req,res,next){
    console.log('Second Route');
    res.json({
        data: "Data from second route"
    });
})
module.exports = router;