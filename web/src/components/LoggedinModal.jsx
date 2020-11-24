/** @format */

import React, {useState} from 'react';

import {Modal, Button} from 'antd';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import useLocalStorage from '../hooks/useLocalStorage';

function LoggedinModal({type}) {
  const [loading, setLoad] = useState(false);
  const [isLoggedIn, setLoggedIn] = useLocalStorage('LoggedIn', false);
  const [userId, setUserId] = useLocalStorage('userid', null);
  const [message, setMessage] = useLocalStorage(`${type}Message`, '');
  const [messageColor, setMessageColor] = useLocalStorage(
    `${type}MessageColor`,
    'red'
  );

  isLoggedIn, userId, message, messageColor;

  const handleOk = () => (window.location.href = '/');
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

  return (
    <Modal
      maskClosable={false}
      visible={true}
      onOk={handleOk}
      onCancel={handleCancel}
      closable={false}
      footer={[
        <Button key="back">
          <Link style={{textDecoration: 'none'}} to="/">
            Leave
          </Link>
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
      <h3>You are already logged in</h3>
      <p>Would you like to logout, or leave the page?</p>
    </Modal>
  );
}


LoggedinModal.propTypes = {
  type: PropTypes.string,
};

export default LoggedinModal;
