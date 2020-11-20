/** @format */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  pwd: {type: String, required: true},
  username: {type: String, required: true},
  pfp: {},
}, { collection: 'users', });

const UserModel = module.exports = mongoose.model('user', UserSchema);
