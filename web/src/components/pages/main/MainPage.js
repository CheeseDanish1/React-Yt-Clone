import React from 'react';
import Categories from './Categories';
import Videos from './Videos';
import Header from './Header';
import './MainPage.css'

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