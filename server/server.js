/** @format */

const io = require('socket.io')(5000);
const UserModel = require('./database/models/user');
const testUserCreate = require('./errHandling/userCreate');
const {v4} = require('uuid');

io.on('connection', socket => {
  socket.on('signup', data => {
    let res = testUserCreate(socket, data);

    if (res != true) {
      socket.emit('signupError', res);
    } else {
      socket.emit('signupSuccess', 'Successfully created your account');

      let u = new UserModel({
        id: v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.userName,
        email: data.email,
        pwd: data.password,
        pfp: ""
      });

      u.save()
        .then(res => console.log(res))
        .catch(console.error);

      console.log('A user signed up', data);
    }

    socket.removeAllListeners('signup');
  });
});
