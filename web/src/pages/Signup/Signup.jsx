/** @format */

import React, {useState} from 'react';
import Header2 from '../../components/Header';
import {Input, Button, Modal, Spin} from 'antd';
import 'antd/dist/antd.css';
import socket from '../../extra/socket';
import useLocalStorage from '../../hooks/useLocalStorage';

const Signup = () => {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('LoggedIn', false);
  const [userId, setUserId] = useLocalStorage('userid', null);
  const [message, setMessage] = useLocalStorage('signupMessage', '');
  const [visible, setVisibility] = useState(true);

  const [spining, setSpin] = useState(false);

  const [messageColor, setMessageColor] = useLocalStorage(
    'signupMessageColor',
    'red'
  );

  const handleOk = () => window.history.back();
  const handleCancel = () => setVisibility(false);

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
      }, 2000);

      setTimeout(() => {
        window.location.href = window.location;
        return console.log(data);
      }, 5000);
    });

    socket.on('signupSuccess', data => {
      setTimeout(() => {
        setSpin(false);
        setUserId(data);
        console.log('Success');
        setMessage('Successfully made acount');
        setMessageColor('Green');
      }, 2000);

      setTimeout(() => {
        window.location.href = window.location;
        setLoggedIn(true);
      }, 5000);
    });
  };

  document.addEventListener('keypress', e => {
    if (e.key === 'Enter') submit();
  });

  return (
    <>
      {isLoggedIn ? (
        <Modal
          maskClosable={false}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
        >
          <h1>You are already logged in</h1>
          <p>Press ok to leave the page, or press cancel to continue</p>
        </Modal>
      ) : (
        <></>
      )}

      <Header2 />

      <Spin
        style={{
          // textAlign: 'center',
          // background: 'rgba(0, 0, 0, 0.05)',
          // borderRadius: '4px',
          // marginBottom: '20px',
          // padding: '30px 50px',
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
    </>
  );
};

export default Signup;
