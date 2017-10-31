var express = require('express');
var router = express.Router();
const debug = require('debug')('app');
var trips = require('../services/trips');

router.get('/user/:id', function(req, res, next) {
  trips.getTripsByUser(req.params.id)
    .then(trips => res.send({ trips: trips }))
    .catch(err => { next(err); })
});

router.get('/:id', function(req, res, next) {
  trips.getTripById(req.params.id)
    .then(trip => res.send({ trip: trip }))
    .catch(err => { next(err); })
});

router.get('/:id/places', function(req, res, next) {
  trips.getPlacesForTrip(req.params.id)
    .then(places => { res.send({ places: places }); })
    .catch(err => { next(err); })
});

router.get('/', function(req, res, next) {
  trips.getRecentTrips()
    .then(trips => res.send({ trips: trips }))
    .catch(err => { next(err); })
});

router.post('/:id/place', function(req, res, next) {
  trips.savePlaceToTrip(req.params.id, req.body)
    .then(one => res.json(one))
    .catch(err => { next(err); });
});

router.post('/', function(req, res, next) {
  trips.createTrip(req.body)
    .then(one => res.json(one))
    .catch(err => { next(err); });;
});

module.exports = router;
