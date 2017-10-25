var express = require('express');
var router = express.Router();
const debug = require('debug')('app');
var trips = require('../services/trips');

router.get('/:id', function(req, res, next) {
  trips.getTripById(req.params.id).then((trip) => {
    trip: trip
  });
});

router.get('/:id/places', function(req, res, next) {
  trips.getPlacesForTrip(req.params.id).then((places) => {
    res.send({
      places: places
    });
  });
});

router.get('/', function(req, res, next) {
  trips.getRecentTrips().then((trips) =>
    res.send({
      trips: trips
    }));
});

router.post('/:id/place', function(req, res, next) {
  trips.savePlaceToTrip(req.params.id, req.body).then((one) => res.json(one));
});


router.post('/', function(req, res, next) {
  trips.createTrip(req.body.title).then((one) => res.json(one));
});

module.exports = router;
