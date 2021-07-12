import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Index from './pages/Index';
import Inventory from './pages/Inventory';

class App extends React.Component {
  render () {
    return (
        <Router>
            <Route exact path="/" component={Index} />
            <Route exact path="/inventory" component={Inventory} />
        </Router>
    );
  }
}

export default App;