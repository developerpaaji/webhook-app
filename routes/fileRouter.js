var express = require('express');
var router = express.Router();

/* Webhook testing*/
router.get('/update', function(req, res, next) {
  var challenge=req.params.challenge;
  console.log(req.body);
  res.send(challenge);
});
/* Webhook posting */
router.post('/update', function(req, res, next) {
  console.log(req.body);
  res.send('nxIKj-ZRT1TEoCvqe6d1AkWdaZU4L5fGpgI16lxGBI4');
});

module.exports = router;
