/** @format */

import React, {useState} from 'react';
import Header2 from '../../components/Header';
import {Input, Button, Spin} from 'antd';

import Title from '../../components/Title';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import socket from '../../extra/socket';
import useLocalStorage from '../../hooks/useLocalStorage';
import LoggedinModal from '../../components/LoggedinModal';


const Signup = () => {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('LoggedIn', false);
  const [userId, setUserId] = useLocalStorage('userid', null);
  const [message, setMessage] = useLocalStorage('signupMessage', '');
  const [spining, setSpin] = useState(false);

  const [messageColor, setMessageColor] = useLocalStorage(
    'signupMessageColor',
    'red'
  );

  userId;

  const submit = () => {
    setSpin(true);

    // return;
    if (isLoggedIn) {
      setSpin(false);
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
      setTimeout(() => {
        console.log('Error');
        setMessageColor('red');
        setMessage(data.message);
        setSpin(false);
        window.location.href = window.location;
        return console.log(data);
      }, 2000);
    });

    socket.on('signupSuccess', data => {
      setTimeout(() => {
        data;
        setSpin(false);
        setUserId(data);
        console.log('Success');
        setMessage('Successfully made acount');
        setMessageColor('Green');
      }, 2000);

      setTimeout(() => {
        setLoggedIn(true);
        window.location.reload();
      }, 5000);
    });
  };

  let mod = <></>;
  if (isLoggedIn) {
    mod = <LoggedinModal type="signup" />;
  }

  document.addEventListener('keypress', e => {
    if (e.key === 'Enter') submit();
  });

  return (
    <div className="signup">
      <Title title="Signup" />

      <Header2 />

      {mod}

      <Spin
        style={{
          margin: '200px 0',
        }}
        spinning={spining}
        size="large"
      >
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
              Sign Up
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
      </Spin>
    </div>
  );
};

export default Signup;
