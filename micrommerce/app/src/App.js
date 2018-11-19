import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RobotsList from './RobotsList';
import RobotAdd from './RobotAdd';
import RobotById from './RobotById';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/robots' exact={true} component={RobotsList}/>
          <Route path='/robots/new' component={RobotAdd}/>
          <Route path='/robots/:id' component={RobotById}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
