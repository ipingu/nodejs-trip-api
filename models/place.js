import mongoose, { Schema } from 'mongoose';

// Define movie schema
var placeSchema = new Schema({
  trip : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip'
  },
  start: Date,
  end: Date,
  summary: String,
  name: String,
  loc: {
    type: [Number],
    index: '2d'
  }
});

// Export Mongoose model
export const PlaceModel = mongoose.model('place', placeSchema);

export const findByTripId = (id) => {
  return PlaceModel.findAsync({trip:mongoose.Types.ObjectId(id)});
};

export const savePlace = (tripId, name, summary, lat, lng) => {
  var entry = new PlaceModel({
    trip: mongoose.Types.ObjectId(tripId),
    summary: summary,
    name : name
  });

  return entry.saveAsync(entry);
}
