import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
