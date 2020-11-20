/** @format */

const mongoose = require('mongoose');

let con = mongoose.connect(
  //'mongodb+srv://me:wandy07081@db.wvj59.mongodb.net/yt?retryWrites=true&w=majority&authSource=admin',
  // 'mongodb+srv://me:wandy07081@db.mongodb.net/yt?w=majority',
  'mongodb://sam:wandy07081@host:port/yt?retryWrites=true&w=majority&authSource=admin',
  {useNewUrlParser: true, useUnifiedTopology: true}
);

module.exports = con;
