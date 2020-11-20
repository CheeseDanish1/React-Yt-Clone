/** @format */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      first: String,
      last: String,
    },
    id: String,
    email: String,
    pwd: String,
    username: String,
    pfp: String
  },
  { collection: 'users' }
);

const UserModel = (module.exports = mongoose.model('users', UserSchema));
