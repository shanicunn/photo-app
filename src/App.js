import React from 'react';
import './App.css';
import { BrowserRouter as Router,
Switch, Route, Link } from 'react-router-dom';
// import Nav from './components/Nav';
// import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">

      {/* <Nav /> */}
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
