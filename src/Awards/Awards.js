import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Awards.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

class Awards extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className='Awards'>
        <NavbarCustom activeTab='/awards' />
        <Jumbotron>
          <h1>Awards</h1>
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

export default Awards;
