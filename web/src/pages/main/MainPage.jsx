/** @format */

import React from 'react';
import Categories from '../../components/Categories';
import Videos from '../../components/Videos';
import Header from '../../components/Header';
import './MainPage.css';

function MainPage() {
  return (
    <>
      <Header />
      <Categories />
      <Videos />
    </>
  );
}

export default MainPage;
