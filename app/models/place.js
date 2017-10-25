import mongoose, { Schema } from 'mongoose';

// Define movie schema
var placeSchema = new Schema({
  trip : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
    required: true
  },
  start: Date,
  end: Date,
  summary: { type: String, required: true },
  name: { type: String, required: true },
  loc: {
    type: [Number],
    index: '2d'
  }
});

// Export Mongoose model
export const PlaceModel = mongoose.model('place', placeSchema);

export const findPlacesByTripId = (id) => {
  return PlaceModel.findAsync({trip:mongoose.Types.ObjectId(id)});
};

export const savePlace = (tripId, place) => {
  var entry = new PlaceModel({
    trip: mongoose.Types.ObjectId(tripId),
    summary: place.summary,
    name : place.name,
    start : place.start,
    end: place.end
  });

  return entry.saveAsync(entry);
}
