import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <Router>
    
      <div className="App">
        <h2>Friends List</h2>
        <nav> 
          <Link to='/api/login'>Log In Here</Link>
        </nav>
        
        <Route path='/api/login' component={Login} />
        <PrivateRoute exact path ='/api/friends' component={FriendList} />
        <PrivateRoute exact path ='/api/friends' component={FriendForm} />  
      </div>
    
    </Router>
  );
}

export default App;
