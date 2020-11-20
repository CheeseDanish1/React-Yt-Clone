/** @format */

const io = require('socket.io')(5000);
const signup = require('./includes/signup.inc');

io.on('connection', socket => {
  socket.on('signup', data => {
    signup(socket, data)
  });
});