const debug = require('debug')('app');
import {findById, findAll, save} from '../models/trip';
import {findByTripId, savePlace} from '../models/place';

/** Fetch specific trip in db from its id */
export const fetch = (id) => {
    return findById(id);
}

export const fetchAll = () => {
    return findAll(10);
}

/** Create a trip object from parameters */
export const create = (title) => {
    return save(title);
}

/** Create a trip object from parameters */
export const createRelatedPlace = (id, place) => {
  if (place.name.length > 0) {
    return savePlace(id, place.name, place.summary, place.lat, place.lng);
  }
}

export const fetchRelatedPlaces = (id) => {
  return findByTripId(id);
}
