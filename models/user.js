import mongoose, { Schema } from 'mongoose';

// Define movie schema
var userSchema = new Schema({
  alias: String,
  email: String,
  location: String
});

// Export Mongoose model
export const UserModel = mongoose.model('User', userSchema)

export const save = (alias, email, location) => {
  var entry = new UserModel({
    alias, email, location
  };

  return entry.saveAsync(entry);
}
