/** @format */

import React from 'react';
import MainPage from '../pages/main/MainPage.jsx';
import Error404 from '../pages/Error/Error404.jsx';
import Signup from '../pages/Signup/Signup.jsx';
import Login from '../pages/login/Login.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
