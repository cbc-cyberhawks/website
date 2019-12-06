import React from 'react';
import Home from './Home/Home';
import Competitions from './Competitions/Competitions';
import Awards from './Awards/Awards';
import {
  HashRouter,
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
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/competitions' component={Competitions} />
          <Route exact path='/awards' component={Awards} />
          <Route path='/' component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
