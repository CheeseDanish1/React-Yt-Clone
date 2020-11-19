/** @format */

import React from 'react';
import MainPage from './pages/main/MainPage';
import Error404 from './pages/Error/Error404'
import Signup from './pages/signup/Signup'

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route component={Signup} path="/signup" exact />
				<Route component={Error404} />
			</Switch>
		</Router>
	);
}

export default App;
