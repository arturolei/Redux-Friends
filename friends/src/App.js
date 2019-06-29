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
          <Link className="navbar-link" to='/api/login'>Log In Here</Link>
          <Link className="navbar-link" to='/add-friend'>Add a Friend</Link>
          <Link className="navbar-link" to='/api/friends'>Friend List</Link>
        </nav>
        
        <Route path='/api/login' component={Login} />
        <PrivateRoute exact path ='/api/friends' component={FriendList} />
        <Route exact path ='/add-friend' component={FriendForm} />  
      </div>
    
    </Router>
  );
}

export default App;
