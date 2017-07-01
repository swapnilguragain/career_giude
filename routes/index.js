var express = require('express');
var router = express.Router();

const Profile = require('../models/profile');
const Products = require('../models/products');
const Upload = require('../models/upload');

/* GET home page. */
router.get('/', function(req, res, next) {
		res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index1', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

router.get('/try', function(req, res, next) {
  res.render('try', { title: 'Express', Products });
});

router.get('/buy', function(req, res, next) {
  res.render('buy', { title: 'Express' });
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
