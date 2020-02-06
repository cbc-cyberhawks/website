import React from 'react';
import { Card } from 'react-bootstrap';
import './Meetings.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

class Meetings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className='Meetings'>
        <NavbarCustom activeTab='/meetings' />
        <h1>Meetings</h1>
        <Card.Text as='h3'>Meetings occur every Tuesday at 2:00pm, in T545.</Card.Text>
        <div className='notes'>
          <Card>
            <Card.Header>February 4th, 2020</Card.Header>
            <Card.Body>
              <Card.Text>
                <small className='text-muted'>2:00pm - 2:40pm</small>
                <ul>
                  <li>Joseph gave a presentation on Linux and why everyone should use it.</li>
                  <li>Mason discussed the design description  that we plan on turning  in to the graphics department for a possible foam  board or fliers.</li>
                  <li>Time for PRCCDC has been changed to 12:30pm February 13th</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Meetings;
