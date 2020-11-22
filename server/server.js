/** @format */

const io = require('socket.io')(5000);
const signup = require('./includes/signup.inc');
const login = require('./includes/login.inc');

io.on('connection', socket => {
  socket.on('signup', data => {
    signup(socket, data);
  });
  socket.on('login', data => {
    login(socket, data);
  });
});
