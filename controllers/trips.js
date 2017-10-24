const debug = require('debug')('app');
import {findById, findAll, save} from '../models/trip';
import {findByTripId, savePlace} from '../models/place';
import validator from 'validator';

/** Fetch specific trip in db from its id */
export const fetch = (id) => {
    return findById(id);
}

export const fetchByUser = (id) => {
    return findByUser(id);
}

export const fetchAll = () => {
    return findAll(10);
}

/** Create a trip object from parameters */
export const create = (title) => {
    let user = "JaneDoe";
    return save(user, title);
}

/** Create a trip object from parameters */
export const createRelatedPlace = (tripId, place) => {
  console.log("save", place);
  return savePlace(tripId, place.name, place.summary, place.lat, place.lng);
}

export const fetchRelatedPlaces = (id) => {
  return findByTripId(id);
}
