var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Interior Design' });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contacts' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Contacts' });
});

router.get('/catalogue', function(req, res, next) {
  res.render('catalogue', { title: 'Contacts' });
});

module.exports = router;
