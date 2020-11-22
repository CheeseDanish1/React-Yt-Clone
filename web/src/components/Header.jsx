/** @format */

import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import {Layout} from 'antd';

import Pages from './Pages';
import Logo from './Logo';
import InputSection from './InputSection';

const {Header: AntdHeader} = Layout;

function Header() {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('LoggedIn', false);
  const [userId, setUserId] = useLocalStorage('userid', null);

  if (!userId && isLoggedIn) setLoggedIn(false);
  if (userId && !isLoggedIn) setUserId(null);

  console.log(`You are logged ${isLoggedIn ? 'in' : 'out'}`);

  return (
    <>
      <Layout className="layout">
        <AntdHeader>
          <Logo />
          <InputSection />
          <Pages />
        </AntdHeader>
      </Layout>
    </>
  );
}

export default Header;
