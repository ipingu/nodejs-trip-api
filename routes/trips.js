var express = require('express');
var router = express.Router();
const debug = require('debug')('app');
var trip = require('../controllers/trips');

router.get('/:id', function(req, res, next) {
  debug("Fetch trip %s",req.params.id);
  trip.fetch(req.params.id).then((trip) => {
    trip: trip
  });
});

router.get('/:id/places', function(req, res, next) {
  trip.fetchRelatedPlaces(req.params.id).then((places) => {
    res.send({
      places: places
    });
  });
});

router.get('/', function(req, res, next) {
  trip.fetchAll().then((trips) =>
    res.send({
      trips: trips
    }));
});

router.post('/:id/place', function(req, res, next) {
  trip.createRelatedPlace(req.params.id, req.body).then((one) => res.json(one));
});


router.post('/', function(req, res, next) {
  trip.create(req.body.title).then((one) => res.json(one));
});

module.exports = router;
