var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource, petite bite');
});

router.get('/mock', function(req, res, next) {
  res.send({foo: 'bar'});
});

module.exports = router;
