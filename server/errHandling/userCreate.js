/** @format */
const UserModel = require('../database/models/user');
const {v4} = require('uuid');
const emailRegex = require('../extra/regex/email');

function testUserCreate(socket, data) {
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

  if (!emailRegex.test(data.email))
    return {
      type: 'fields',
      additionalInfo: 'pc',
      message: 'Provided email was invalid',
    };

  let u = new UserModel({
    id: v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.userName,
    email: data.email,
    pwd: data.password,
  });

  u.save().then(res => console.log(res)).catch(console.error)

  return true;
}

module.exports = testUserCreate;
