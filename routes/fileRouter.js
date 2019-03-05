var express = require('express');
var router = express.Router();
var path = require('path');
var fileDatabase = require(path.join('../','controllers','fileDatabase.js'))
/* Webhook testing*/
router.get('/update', function(req, res, next) {
  var challenge=req.query.challenge;
  console.log(req.body);
  res.send(challenge);
});

/* Webhook posting */
router.post('/update', function(req, res, next) {
  fileDatabase.update()
});

module.exports = router;
