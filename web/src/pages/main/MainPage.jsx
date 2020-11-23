/** @format */

import React from 'react';
import Categories from '../../components/Categories';
import Videos from '../../components/Videos';
import Header from '../../components/Header';
import './MainPage.css';
import { Helmet } from 'react-helmet'

function MainPage() {
  return (
    <div className="main">
      <Helmet>
          <title>Main Page</title>
        </Helmet>
      <Header />
      {/* <Categories /> */}
      <Videos />
    </div>
  );
}

export default MainPage;
