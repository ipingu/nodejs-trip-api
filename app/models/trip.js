import mongoose, { Schema } from "mongoose";

var placeSchema = new Schema({
  start: Date,
  end: Date,
  summary: { type: String, required: true },
  name: { type: String, required: true },
  loc: {
    type: [Number],
    index: "2d"
  }
});

var tripSchema = new Schema({
  name: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  places: [placeSchema],
  summary: { type: String, required: false }
});

export const TripModel = mongoose.model("Trip", tripSchema);

export const findTripById = id => {
  return TripModel.findOneAsync({ _id: id });
};

export const findTripsByUser = userId => {
  return TripModel.findAsync({ user: userId });
};

export const findTrips = max => {
  return TripModel.findAsync();
};

export const savePlace = (tripId, place) => {
  return findTripById(tripId).then(trip => {
    trip.places.push({
      trip: mongoose.Types.ObjectId(tripId),
      summary: place.summary,
      name: place.name,
      start: place.start,
      end: place.end
    });

    return trip.saveAsync();
  });
};

export const saveTrip = trip => {
  var entry = new TripModel({
    id: new mongoose.Types.ObjectId(),
    ...trip
  });
  return entry.saveAsync(entry);
};
