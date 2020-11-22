/** @format */

import React, {useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import {Layout, Input, Menu, Button} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const {Header: H} = Layout;
const {Item} = Menu;

function Header() {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('LoggedIn', false);
  const [userId, setUserId] = useLocalStorage('userid', null);

  if (!userId && isLoggedIn) setLoggedIn(false);
  if (userId && !isLoggedIn) setUserId(null);
  console.log(`You are logged ${isLoggedIn ? 'in' : 'out'}`);

  const searchForVideo = e => {
    let input = e.target.value || document.querySelector('input').value || null;
    if (!input) return;
    window.location.replace(`/search?q=${input}`);
  };

  let el = <></>;

  if (
    !['/login', '/signup', '/'].includes(window.location.pathname.toLowerCase())
  ) {
    el = (
      <Item key={window.location.pathname.toLowerCase()}>{document.title}</Item>
    );
  }

  return (
    <>
      <Layout className="layout">
        <H
          style={{
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'center',
          }}
        >
          {/* <div
            className="logo"
            style={{
              float: 'left',
              width: '120px',
              height: '31px',
            }}
          >
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt=""
                style={{height: '20px'}}
              />
            </Link>
          </div> */}
          <div
            className="logo"
            style={{
              float: 'left',
              width: '120px',
              height: '31px',
              margin: '16px 24px 16px 0',
              background: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            <img
              src="/assets/images/logo.png"
              alt=""
              style={{
                height: '20px',
                position: 'absolute',
                left: '4vw',
                top: '3vh',
              }}
            />
            {/* <p
              style={{
                position: 'absolute',
                left: '6%',
                top: '0.2%',
                fontSize: '20px',
              }}
            >
              Logo
            </p> */}
          </div>

          <div
            className="input"
            style={{
              marginLeft: '10vw',
              float: 'left',
            }}
          >
            <Input
              className="i"
              placeholder="Search"
              allowClear
              onPressEnter={searchForVideo}
              style={{
                marginTop: '2vh',
                flexGrow: '1',
                maxWidth: '800px',
                width: '50vw',
              }}
            />
            <Button
              onClick={searchForVideo}
              type="primary"
              style={{marginTop: '2vh'}}
            >
              <SearchOutlined onClick={searchForVideo} />
            </Button>
          </div>

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
              onClick={() => {
                if (window.location.pathname.toLowerCase() === '/login') return;
                window.location.pathname = '/login';
              }}
              key="/login"
            >
              Login
            </Item>
            <Item
              onClick={() => {
                if (window.location.pathname.toLowerCase() === '/signup')
                  return;
                window.location.pathname = '/signup';
              }}
              key="/signup"
            >
              Signup
            </Item>
            <Item
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
        </H>
      </Layout>

      {/* <H>
        <Row>
          <Col>
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt=""
                style={{height: '20px'}}
              />
            </Link>
          </Col>
          <Col>
            <Input type="text" placeholder="Search" onChange={handleChange} />
          </Col>
          <Col>
            <Button />
          </Col>
        </Row>
      </H> */}
    </>

    // <header className="header">
    //   <a href="/#">
    //     <img
    //       src="/assets/images/logo.png"
    //       alt="YouTube Logo"
    //       className="youtube-logo"
    //     />
    //   </a>
    //   <form className="search-bar">
    //     <input
    //       className="search-input"
    //       type="search"
    //       placeholder="Search"
    //       value={search}
    //       onChange={handleChange}
    //       aria-label="Search"
    //     />
    //     <button type="submit" className="search-btn">
    //       <img alt="magnify" src="/assets/svg/magnify.svg" />
    //     </button>
    //   </form>
    //   <div className="menu-icons">
    //     <a href="/#">
    //       <img src="/assets/svg/video-plus.svg" alt="Upload Video" />
    //     </a>
    //     <a href="/#">
    //       <img src="/assets/svg/apps.svg" alt="Apps" />
    //     </a>
    //     <a href="/#">
    //       <img src="/assets/svg/bell.svg" alt="Notifications" />
    //     </a>
    //     <a href="/#">
    //       <img
    //         className="menu-channel-icon"
    //         src="https://source.unsplash.com/36x36/?boy"
    //         alt=""
    //       />
    //     </a>
    //   </div>
    // </header>
  );
}

export default Header;
