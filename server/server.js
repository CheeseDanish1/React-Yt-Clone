/** @format */

const io = require('socket.io')(5000);
const UserModel = require('./database/models/user');
const testUserCreate = require('./errHandling/userCreate');

io.on('connection', socket => {

  socket.on('signup', data => {
    let res = testUserCreate(socket, data);

    if (res != true) {
      socket.emit('signupError', res);
    } else {
      socket.emit('signupSuccess', 'Successfully created your account');

      console.log('A user signed up', data);
    }

    socket.removeAllListeners('signup');
  });
});
