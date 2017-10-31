import mongoose, { Schema } from 'mongoose';

var userSchema = new Schema({
  alias: String,
  email: String,
  location: String
});

export const UserModel = mongoose.model('User', userSchema)

export const saveUser = (alias, email, location) => {
  var entry = new UserModel({
    alias, email, location
  });

  return entry.saveAsync(entry);
}
