/** @format */

import React from 'react';
import {Menu, Input} from 'antd';

const {Item} = Menu;
function Pages() {
  let el = <></>;

  if (
    !['/login', '/signup', '/'].includes(window.location.pathname.toLowerCase())
  ) {
    el = (
      <Item
        style={{backgroundColor: '#18191c'}}
        key={window.location.pathname.toLowerCase()}
      >
        {document.title}
      </Item>
    );
  }

  return (
    <Menu
      style={{
        width: '16vw',
        float: 'left',
        position: 'absolute',
        right: '0',
      }}
      theme="dark"
      mode="horizontal"
      className="menu"
      defaultSelectedKeys={[window.location.pathname.toLowerCase()]}
    >
      <Item
        style={{backgroundColor: '#18191c'}}
        onClick={() => {
          if (window.location.pathname.toLowerCase() === '/login') return;
          window.location.pathname = '/login';
        }}
        key="/login"
      >
        Login
      </Item>
      <Item
        style={{backgroundColor: '#18191c'}}
        onClick={() => {
          if (window.location.pathname.toLowerCase() === '/signup') return;
          window.location.pathname = '/signup';
        }}
        key="/signup"
      >
        Signup
      </Item>
      <Item
        style={{backgroundColor: '#18191c'}}
        onClick={() => {
          if (window.location.pathname.toLowerCase() === '/') return;
          window.location.pathname = '/';
        }}
        key="/"
      >
        Home
      </Item>
      {el}
    </Menu>
  );
}

export default Pages;
