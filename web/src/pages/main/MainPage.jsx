/** @format */

import React from 'react';
import Categories from '../../components/Categories';
import Videos from '../../components/Videos';
import Header from '../../components/Header';
import Title from '../../components/Title';
import './MainPage.css';

function MainPage() {
  return (
    <>
      <Title title="Main page" />
      <Header />
      <Categories />
      <Videos />
    </>
  );
}

export default MainPage;
