var express = require('express');
var router = express.Router();
const debug = require('debug')('app');
var trip = require('../controllers/trips');

router.get('/:id', function(req, res, next) {
  debug("Fetch trip %s",req.params.id);
  trip.fetch(req.params.id).then((trip) => {
    res.json({
      id: trip.id,
      title: trip.title
    });
  });
});

router.get('/:id/places', function(req, res, next) {
  trip.fetchRelatedPlaces(req.params.id).then((places) => {
    res.send({
      places: places.map(place => ({
          name: place.name,
          summary: place.summary,
          location : place.loc
      })
    )});
  });
});

router.get('/', function(req, res, next) {
  trip.fetchAll().then((trips) =>
    res.send({
      trips: trips.map(trip => ({
        id: trip.id,
        title: trip.title
      }))
    }));
});

router.post('/:id/place', function(req, res, next) {
  trip.createRelatedPlace(req.params.id, req.body).then((one) => res.json(one));
});


router.post('/', function(req, res, next) {
  trip.create(req.body.title).then((one) => res.json(one));
});

module.exports = router;
