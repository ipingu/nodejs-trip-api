const debug = require('debug')('app');
import {findTripById, findTrips, saveTrip} from '../models/trip';
import {findPlacesByTripId, savePlace} from '../models/place';
import validator from 'validator';

export const getTripById = (id) => {
    return findTripById(id);
}

export const getTripForUser = (id) => {
    return findTripByUser(id);
}

export const getRecentTrips = () => {
    return findTrips(10);
}

export const savePlaceToTrip = (tripId, place) => {
  return savePlace(tripId, place.name, place.summary, place.lat, place.lng);
}

export const getPlacesForTrip = (id) => {
  return findPlacesByTripId(id);
}

export const createTrip = (title) => {
    return saveTrip(title);
}
