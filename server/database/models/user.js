/** @format */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    username: String,
    pfp: String
  },
  {collection: 'users'}
);

const UserModel = (module.exports = mongoose.model('user', UserSchema));
