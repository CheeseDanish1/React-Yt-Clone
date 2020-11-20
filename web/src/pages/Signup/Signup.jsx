/** @format */

import React from 'react';
import Header2 from '../../components/Header';
import {Input, Button} from 'antd';
import 'antd/dist/antd.css';
import socket from '../../extra/socket';
import useLocalStorage from '../../hooks/useLocalStorage';

const Signup = () => {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('LoggedIn', false);
  const [message, setMessage] = useLocalStorage('signupMessage', "");
  const [messageColor, setMessageColor] = useLocalStorage(
    'signupMessageColor',
    'red'
  );

  const submit = () => {
    if (isLoggedIn) {
      setMessageColor('red');
      setMessage('You are already logged in');
      window.location.reload();
    }

    let ob = {
      firstName: document.querySelector('.fn').value,
      lastName: document.querySelector('.ln').value,
      email: document.querySelector('.e').value,
      userName: document.querySelector('.un').value,
      password: document.querySelector('.p').value,
      passwordCon: document.querySelector('.pc').value,
    };

    socket.emit('signup', ob);

    socket.on('signupError', data => {
      console.log("Error")
      setMessageColor('red');
      setMessage(data.message);
      window.location.href = window.location;
      return console.log(data);
    });

    socket.on('signupSuccess', data => {
      console.log("Success")
      window.location.href = window.location;
      setMessage('Successfully made acount');
      setMessageColor('Green');
      setLoggedIn(true);
      return console.log(data);
    });
  };

  return (
    <>
      <Header2 />

      <div
        className="form"
        style={{
          marginTop: '3vh',
          width: '50%',
          position: 'absolute',
          left: '45%',
          transform: 'translate(-50%, 0)',
        }}
      >
        <Input
          type="text"
          placeholder="First name"
          style={{padding: '0.6rem', width: '62vw', fontSize: '24px'}}
          className="fn"
        />
        <br />
        <br />
        <Input
          className="ln"
          type="text"
          placeholder="Last name"
          style={{padding: '0.6rem', width: '62vw', fontSize: '24px'}}
        />
        <br />
        <br />
        <Input
          className="e"
          type="email"
          placeholder="E-mail"
          style={{padding: '0.6rem', width: '62vw', fontSize: '24px'}}
        />
        <br />
        <br />
        <Input
          className="un"
          type="text"
          placeholder="User name"
          style={{padding: '0.6rem', width: '62vw', fontSize: '24px'}}
        />
        <br />
        <br />
        <Input
          className="p"
          type="password"
          placeholder="Password"
          style={{padding: '0.6rem', width: '62vw', fontSize: '24px'}}
        />
        <br />
        <br />
        <Input
          className="pc"
          type="password"
          placeholder="Confirm Password"
          style={{padding: '0.6rem', width: '62vw', fontSize: '24px'}}
        />
        <br />
        <br />

        <center>
          <Button
            type="primary"
            size="large"
            style={{
              padding: '1.4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '45vw',
              fontSize: '32px',
              height: '40px',
              marginLeft: '8vw',
            }}
            onClick={submit}
          >
            Submit
          </Button>
        </center>
        <br />
        <br />
        <center>
          <output
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '32px',
              height: '40px',
              marginLeft: '6.2vw',
              marginTop: '-2vh',
              color: messageColor,
              width: '100%',
            }}
          >
            {message ? message : ''}
          </output>
        </center>
      </div>
    </>
  );
};

export default Signup;
