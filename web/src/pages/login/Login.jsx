/** @format */

import React, {useState} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import {Modal, Input, Button, Spin} from 'antd';
import Header from '../../components/Header';
import socket from '../../extra/socket';

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('LoggedIn', false);
  const [userId, setUserId] = useLocalStorage('userid', null);
  const [visible, setVisibility] = useState(true);
  const [spining, setSpin] = useState(false);
  const [message, setMessage] = useLocalStorage('loginMessage', '');
  const [loading, setLoad] = useState(false);
  const [messageColor, setMessageColor] = useLocalStorage(
    'loginMessageColor',
    'red'
  );
  const handleOk = () => window.history.back();
  const handleCancel = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 4800);
    setTimeout(() => {
      setUserId(null);
      setLoggedIn(false);
      setMessageColor('green');
      setMessage('Successfully logged out');
      window.location.reload();
    }, 5000);
  };

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

  return (
    <>
      <Header />

      {isLoggedIn ? (
        <Modal
          maskClosable={false}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          footer={[
            <Button key="back" onClick={handleOk}>
              Leave
            </Button>,
            <Button
              key="logout"
              loading={loading}
              onClick={handleCancel}
              type="primary"
            >
              Logout
            </Button>,
          ]}
        >
          <h1>You are already logged in</h1>
          <p>Would you like to logout, or leave the page?</p>
        </Modal>
      ) : (
        <></>
      )}

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
