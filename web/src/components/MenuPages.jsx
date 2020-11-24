/** @format */

import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

const {Item} = Menu;

function MenuPages() {
  let el = <></>;
  if (
    !['/login', '/signup', '/'].includes(window.location.pathname.toLowerCase())
  ) {
    el = (
      <Item key={window.location.pathname.toLowerCase()}>{document.title}</Item>
    );
  }
  return (
    <Menu
      style={{
        width: '16vw',
        // float: 'left',
        position: 'absolute',
        right: '0',
      }}
      theme="dark"
      mode="horizontal"
      className="menu"
      defaultSelectedKeys={[window.location.pathname.toLowerCase()]}
    >
      <Item key="/login">
        <Link style={{textDecoration: 'none'}} to="/login">
          Login
        </Link>
      </Item>
      <Item key="/signup">
        <Link style={{textDecoration: 'none'}} to="/signup">
          Signup
        </Link>
      </Item>

      <Item key="/">
        <Link style={{textDecoration: 'none'}} to="/">
          Home
        </Link>
      </Item>

      {el}
    </Menu>
  );
}
export default MenuPages;
