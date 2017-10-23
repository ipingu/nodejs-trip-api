import mongoose, { Schema } from 'mongoose';

// Define movie schema
var tripSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true
  },
  title: String
});

// Export Mongoose model
export const TripModel = mongoose.model('trip', tripSchema);

export const findById = (id) => {
  return TripModel.findOneAsync({id: id});
};

export const findAll = (max) => {
  return TripModel.findAsync();
}

export const save = (title) => {
  var entry = new TripModel({id: new mongoose.Types.ObjectId(), title: title});
  return entry.saveAsync(entry);
}
