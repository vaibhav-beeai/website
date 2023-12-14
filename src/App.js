// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Update from './components/Update';
import MonitorLikeAPro from './components/MonitorLikeAPro';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/Updates" component={Update}/>
          <Route path="/monitor-like-a-pro" component={MonitorLikeAPro} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
