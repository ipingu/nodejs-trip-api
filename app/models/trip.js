import mongoose, { Schema } from "mongoose";

var placeSchema = new Schema({
  location: { type: String, required: true },
  coord: {
    type: [Number],
    index: "2d"
  },
  name: { type: String, required: false },
  summary: { type: String, required: false },
  start: Date,
  end: Date
});

var tripSchema = new Schema({
  location: { type: String, required: true },
  coord: {
    type: [Number],
    index: "2d"
  },
  name: { type: String, required: false },
  summary: { type: String, required: false },
  places: [placeSchema],
  start: Date,
  end: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export const TripModel = mongoose.model("Trip", tripSchema);

export const findTripById = id => {
  return TripModel.findOneAsync({ _id: id });
};

export const findTripsByUser = userId => {
  return TripModel.findAsync({ user: userId });
};

export const findTrips = max => {
  return TripModel.find().sort("-start").execAsync();
};

export const savePlace = (tripId, place) => {
  return findTripById(tripId).then(trip => {
    trip.places.push({
      trip: mongoose.Types.ObjectId(tripId),
      ...place
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
