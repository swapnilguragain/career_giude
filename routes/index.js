var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: '' });
});

router.get('/catalogue', function(req, res, next) {
  res.render('catalogue', { title: '' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: '' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '' });
});



router.get('/header', function(req, res, next) {
  res.render('header', { title: '' });
});


router.get('/decorate', function(req, res, next) {
  res.render('decorate', { title: '' });
});


module.exports = router;
