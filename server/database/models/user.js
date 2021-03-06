/** @format */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
  },
  id: String,
  email: String,
  pwd: String,
  username: String,
  lowercaseUsername: String,
  pfp: String,
  subscribers: Array,
  subscriptions: Array,
  videos: Array,
  created: String,
  createdTimestamp: String
}, {
  collection: 'users'
});

module.exports = mongoose.model('users', UserSchema);