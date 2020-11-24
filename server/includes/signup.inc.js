/** @format */
const UserModel = require('../database/models/user');
const emailRegex = require('../extra/regex/email');
const usernameRegex = require('../extra/regex/username');
// eslint-disable-next-line
const db = require('../database/db');
const bcrypt = require('bcrypt');


function genId() {
  let chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-';
  let length = [8, 10, 12];
  let len = length[Math.floor(Math.random() * length.length)];

  chars = shuffle(chars);
  chars = chars.slice(0, len);
  return chars;

  function shuffle(s) {
    var a = s.split(''),
      n = a.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join('');
  }
}

module.exports = function (socket, data) {
  let userId = genId();
  async function testUserCreate() {
    if (!data.firstName)
      return {
        type: 'fields',
        message: 'Please provide your first name',
        additionalInfo: 'fn',
      };

    if (!data.lastName)
      return {
        type: 'fields',
        additionalInfo: 'ln',
        message: 'Please provide your last name',
      };

    if (!data.email)
      return {
        type: 'fields',
        additionalInfo: 'e',
        message: 'Please provide an email address',
      };

    if (!data.userName)
      return {
        type: 'fields',
        additionalInfo: 'un',
        message: 'Please provide a user name',
      };

    if (!data.password)
      return {
        type: 'fields',
        additionalInfo: 'p',
        message: 'Please Provide a password',
      };

    if (!data.passwordCon)
      return {
        type: 'fields',
        additionalInfo: 'pc',
        message: 'Provide a confirmation password',
      };

    if (data.password != data.passwordCon)
      return {
        type: 'con',
        additionalInfo: ['p', 'pc'],
        message: 'Password does not match password confirmation',
      };

    if (!emailRegex.test(data.email))
      return {
        type: 'regex',
        additionalInfo: 'pc',
        message: 'Provided email was invalid',
      };

    if (!usernameRegex.test(data.userName))
      return {
        type: 'regex',
        additionalInfo: [
          'Can only include letters, numbers, underscore, and hyphin',
          'un',
        ],
        message: 'Invalid username',
      };

    let emailExists = await UserModel.findOne({email: data.email});
    if (emailExists)
      return {
        type: 'exists',
        additionalInfo: 'e',
        message: 'The email provided already exists',
      };

    let usernameExists = await UserModel.findOne({
      lowercaseUsername: data.userName.toLowerCase(),
    });

    if (usernameExists)
      return {
        type: 'exists',
        additionalInfo: 'u',
        message: 'The username provided already exists',
      };

    return 1;
  }

  let rest = testUserCreate(socket, data);
  const password = data.password;

  bcrypt.hash(password, 12).then(hashedPwd => {
    rest.then(res => {
      if (typeof res == 'object') {
        socket.emit('signupError', res);
      } else {
        socket.emit('signupSuccess', userId);
        let u = new UserModel({
          id: userId,
          name: {
            first: data.firstName,
            last: data.lastName,
          },
          username: data.userName,
          email: data.email,
          pwd: hashedPwd,
          lowercaseUsername: data.userName.toLowerCase(),
          subscribers: [],
          subscriptions: [],
          videos: [],
          pfp: '',
        });

        u.save((err, res) => {
          if (err) return console.error(err);
          return res;
        });
      }

      socket.removeAllListeners('signup');
    });
  });
};
