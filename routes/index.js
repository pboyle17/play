var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MTG Draft' });
});

router.get('/stuff', function(req,res){
  res.send('hello world!');
});

module.exports = router;
