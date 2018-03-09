var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

const Profile = require('../models/profile');
const Products = require('../models/products');
const Upload = require('../models/upload');
const Designer = require('../models/designer');
const mailTransport = nodemailer.createTransport(`smtps://wedesignnp@gmail.com:swapwedesign@smtp.gmail.com`);


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

router.get('/designerProfile/:id', function(req, res){
  Designer.findOne({_id: req.params.id}, function(err, designer){
    res.render('designerProfile', {title: 'Profile', designer});
    if (err) throw err;
  });
});


router.post('/sendEmail', function(req, res){
  

    vName = req.body.name;
    vEmail = req.body.email;
    

    const mailOptions = {
      from: 'We Design <noreply@wedesign.com>',
      to: vEmail //todo change this to upper variable
    };
    mailOptions.subject = 'New design request';
    mailOptions.text = 'Mr/Ms. ' + vName + ' you have received a request. Please login to our portal to know more about the request. ';
    return mailTransport.sendMail(mailOptions, (error, info) => {
          res.send('sucess');
    });
    
});

router.get('/designers', function(req, res, next){
  Designer.getDesigner(function(err, designer){
    if (err) throw err; 
    res.render('designers', { title: 'Designers', designer });
  });
});

router.get('/requestAdmin', function(req, res, next){
  Upload.getUploads(function(err, upload){
    if (err) throw err;
    res.render('requestAdmin', {tittle: 'Admin Request Room Design', upload});
  });
});

router.get('/requestDesigner', function(req, res, next){
  Upload.getUploads(function(err, upload){
    if (err) throw err;
    res.render('requestDesigner', {tittle: 'Work Request', upload});
  });
});

router.get('/designerRequest', function(req, res, next){
  Upload.getUpload(function(err, upload){
    if (err) throw err;
    res.render('designerRequest', {tittle: 'Work Request', upload});
  });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

router.get('/buy', function(req, res, next) {
  res.render('buy', { title: 'Express' });
});

router.get('/signUp', function(req, res, next) {
  res.render('signUp', { title: 'Sign Up' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '' });
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
