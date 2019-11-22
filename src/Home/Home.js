import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Home.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className='Home'>
        <NavbarCustom Text='Home' Route='/home' />
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant='dark'>Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
