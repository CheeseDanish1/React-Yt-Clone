/** @format */

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://sam:wandy07081@db.wvj59.mongodb.net/yt?retryWrites=true&w=majority&authSource=admin',
  {useNewUrlParser: true, useUnifiedTopology: true}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  'Connected';
});

module.exports = db;
