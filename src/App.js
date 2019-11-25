import React from 'react';
import Home from './Home/Home';
import Competitions from './Competitions/Competitions';
import Awards from './Awards/Awards';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/competitions' component={Competitions} />
          <Route exact path='/awards' component={Awards} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
