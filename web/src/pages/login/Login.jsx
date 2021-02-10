/** @format */

import React, {useState} from 'react';
import {Input, Button, Spin} from 'antd';
import Header from '../../components/Header';
import Title from '../../components/Title';

import useLocalStorage from '../../hooks/useLocalStorage';
import socket from '../../extra/socket';
import LoggedinModal from '../../components/LoggedinModal';

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('LoggedIn', false);
  const [userId, setUserId] = useLocalStorage('userid', null);
  const [spining, setSpin] = useState(false);
  const [message, setMessage] = useLocalStorage('loginMessage', '');
  const [messageColor, setMessageColor] = useLocalStorage(
    'loginMessageColor',
    'red'
  );

  userId;

  function submit() {
    let ob = {
      info: document.querySelector('.unoe').value,
      password: document.querySelector('.p').value,
    };

    if (isLoggedIn) {
      setMessageColor('red');
      setMessage('You are already logged in');
      window.location.reload();
      return;
    }

    socket.emit('login', ob);

    setSpin(true);

    socket.on('loginS', data => {
      console.log('S');

      // console.log(data);
      setTimeout(() => {
        setSpin(false);
        setUserId(data);
        console.log('Success');
        setMessage('Successfully logged in');
        setMessageColor('Green');
      }, 2000);

      setTimeout(() => {
        window.location.href = window.location;
        setLoggedIn(true);
      }, 5000);
    });
    socket.on('loginE', data => {
      console.log('E');
      setTimeout(() => {
        console.log('Error');
        setMessageColor('red');
        setMessage(data.message);
        setSpin(false);
      }, 2000);

      setTimeout(() => {
        window.location.href = window.location;
        return console.log(data);
      }, 5000);
    });
  }

  let mod = <></>;
  if (isLoggedIn) {
    mod = <LoggedinModal type="login" />;
  }

  return (
    <>
      <Title title="Login" />
      <Header />

      {mod}

      <Spin
        style={{
          margin: '200px 0',
        }}
        spinning={spining}
        size="large"
      >
        <h1
          style={{
            position: 'absolute',
            left: '49%',
            top: '5vh',
            transform: 'translate(-50%, 0)',
            fontSize: '10vmin',
            color: '#191101',
          }}
        >
          Log In
        </h1>

        <div
          className="form"
          style={{
            marginTop: '40vh',
            width: '50%',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 0)',
          }}
        >
          <center>
            <Input
              type="text"
              placeholder="Username or Email"
              style={{
                padding: '0.6rem',
                width: '55vw',
                fontSize: '20px',
                marginBottom: '2vh',
                // marginLeft: "7vh"
              }}
              className="unoe"
            />
            <br />
            <br />
            <Input
              className="p"
              type="password"
              placeholder="Password"
              style={{
                padding: '0.6rem',
                width: '55vw',
                fontSize: '20px',
                marginBottom: '2vh',
                // marginLeft: '7vh',
                // display: 'inline-block',
              }}
            />
            <br />
            <br />

            <Button
              type="primary"
              size="large"
              style={{
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '30vw',
                fontSize: '32px',
                height: '6vh',
                // marginLeft: '11vw',
              }}
              onClick={submit}
            >
              Submit
            </Button>

            <br />
            <br />
            <output
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '32px',
                height: '40px',
                // marginLeft: '6.2vw',
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
    </>
  );
};

export default Login;
