/** @format */

const mongoose = require('mongoose');

let con = mongoose.connect(
  'Mine!',
  {useNewUrlParser: true, useUnifiedTopology: true}
);

module.exports = con;
