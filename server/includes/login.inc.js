/** @format */

// eslint-disable-next-line
const db = require('../database/db');
const bcrypt = require('bcrypt');
const UserModel = require('../database/models/user');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(
  'ThisJustHasToBeEncryptedSoTheUserCanNotSeeItBecauseItIsTheirIdButItIsNotSensitiveInfoSoPleaseDoNotSueMe'
);

function login(socket, data) {
  socket.removeAllListeners('login');

  if (!data.info || !data.password) {
    return socket.emit('loginE', {
      type: 'fields',
      message: 'Please fill out all fields',
    });
  }

  UserModel.findOne({
    $or: [{email: data.info}, {lowercaseUsername: data.info.toLowerCase()}],
  }).then(user => {
    if (!user)
      return socket.emit('loginE', {
        type: 'nousr',
        message: 'Account does not exist',
      });

    console.log(user);

    bcrypt.compare(data.password, user.pwd, (err, res) => {
      if (err) throw err;

      if (res == true) {
        let hash = cryptr.encrypt(user.id);
        socket.emit('loginS', hash);
      } else {
        socket.emit('loginE', {
          type: 'invalid pwd',
          message: 'Incorrect password',
        });
      }
    });
  });
}

module.exports = login;
