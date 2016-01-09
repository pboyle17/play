var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MTG Draft' });
});

router.get('/stuff', function(req,res){
  res.render('stuff',{ blurb:'hello World!' });
});

module.exports = router;
