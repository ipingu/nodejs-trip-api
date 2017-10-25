var express = require('express');
var router = express.Router();
const debug = require('debug')('app');
var trip = require('../controllers/trips');

router.get('/:user/trips/', function(req, res, next) {
  trip.fetchByUser(req.params.user).then((trips) => {
    res.send({
      trips: trips
      })
  });
});

module.exports = router;
