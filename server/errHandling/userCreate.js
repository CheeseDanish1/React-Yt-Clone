/** @format */
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

  return true;
}

module.exports = testUserCreate;
