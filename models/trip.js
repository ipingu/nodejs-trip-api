import mongoose, { Schema } from 'mongoose';

// Define movie schema
var tripSchema = new Schema({
  title: String,
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// Export Mongoose model
export const TripModel = mongoose.model('Trip', tripSchema);

export const findById = (id) => {
  return TripModel.findOneAsync({_id: id});
};

export const findByUser = (userId) => {
  return TripModel.findOneAsync({user: userId});
};

export const findAll = (max) => {
  return TripModel.findAsync();
}

export const save = (title) => {
  var entry = new TripModel({id: new mongoose.Types.ObjectId(), title: title});
  return entry.saveAsync(entry);
}
