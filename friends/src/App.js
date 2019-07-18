import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import {PrivateRoute} from './components/PrivateRoute';
import Login from './components/Login';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link to='/'>Login</Link>
          <Link to='/profile'>Profile</Link>

          <Route exact path='/' component={Login} />
          <PrivateRoute exact path='/profile' component={Profile} />
        </header>
      </div>
    </Router>
  );
}

export default App;
