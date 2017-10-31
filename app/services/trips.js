const debug = require('debug')('app');
import {findTripById, findTrips, findTripsByUser, saveTrip, savePlace } from '../models/trip';
import validator from 'validator';

export const getTripById = (id) => {
    return findTripById(id);
}

export const getTripsByUser = (id) => {
    return findTripsByUser(id);
}

export const getRecentTrips = () => {
    return findTrips(10);
}

export const savePlaceToTrip = (tripId, place) => {
  return savePlace(tripId, place);
}

export const createTrip = (trip) => {
    return saveTrip(trip);
}
