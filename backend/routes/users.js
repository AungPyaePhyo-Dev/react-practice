var express = require('express');
var router = express.Router();7

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  let user = {
    name : "AP",
    age : 27
  }
  res.json(user);
});

module.exports = router;
