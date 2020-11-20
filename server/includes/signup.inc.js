/** @format */

const UserModel = require('../database/models/user');
const emailRegex = require('../extra/regex/email');
const {v4} = require('uuid');
const db = require('../database/db');

module.exports = function (socket, data) {
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

    let emailExists = await UserModel.findOne({email: data.email});

    if (emailExists)
      return {
        type: 'exists',
        additionalInfo: 'e',
        message: 'The email provided already exists',
      };

    let usernameExists = await UserModel.findOne({userName: data.userName});

    if (usernameExists)
      return {
        type: 'exists',
        additionalInfo: 'u',
        message: 'The username provided already exists',
      };

    return 1;
  }

  let rest = testUserCreate(socket, data);

  rest.then(res => {
    console.log(res, typeof res);
    if (typeof res == 'object') {
      socket.emit('signupError', res);
    } else {
      socket.emit('signupSuccess', 'Successfully created your account');

      let u = new UserModel({
        id: v4(),
        name: {
          first: data.firstName,
          last: data.lastName,
        },
        username: data.userName,
        email: data.email,
        pwd: data.password,
        pfp: '',
      });

      u.save((err, res) => {
        if (err) return console.error(err);
      });
    }

    socket.removeAllListeners('signup');
  });
};
