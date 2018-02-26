var express = require('express');
var router = express.Router();

const Profile = require('../models/profile');
const Products = require('../models/products');
const Upload = require('../models/upload');
const Designer = require('../models/designer');

/* GET home page. */
router.get('/', function(req, res, next) {
		res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Interior Design' });
});

router.get('/3dmodeling', function(req, res, next){
  res.render('3dmodeling', { tittle: '3D Model'});
});

router.get('/design', function(req, res, next){
  res.render('design', { tittle: 'Express'});
});

router.get('/add', function(req, res, next){
  res.render('addDesigner', { tittle: 'Add Designers'});
});

router.get('/designers', function(req, res, next){
  Designer.getDesigner(function(err, designer){
    if (err) throw err; 
    res.render('designers', { title: 'Designers', designer });
  });
});

router.get('/profile', function(req, res, next) {
  Designer.getDesigner(function(err, designer){
    if (err) throw err; 
    res.render('designerProfile', { title: 'Profiles', designer });
  });
});



router.get('/design1', function(req, res, next){
  res.render('design1', { tittle: 'Express'});
})

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

router.get('/buy', function(req, res, next) {
  res.render('buy', { title: 'Express' });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contacts' });
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

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Contacts' });
});

router.get('/catalogue', function(req, res, next) {
  res.render('catalogue', { title: 'Contacts' });
});

router.get('/try', function(req, res, next) {
  res.render('try', { title: '' });
});


module.exports = router;
