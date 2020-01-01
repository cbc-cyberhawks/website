import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import './Awards.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';
import cyberforce from './doe-cyberforce-competition-2019_49076116333_o.jpg';

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
        <h1>Awards</h1>
        <CardColumns style={{ width: '82%', margin: 'auto', marginBottom: '30px' }}>
          <Card>
            <Card.Img variant='top' src={cyberforce} />
            <Card.Body>
              <Card.Title>Cyberforce 2019</Card.Title>
              <Card.Text>
                <ul>
                  <li>1st place from Washington State</li>
                  <li>Air National Guard Performance Award</li>
                  <li>14th place overall (out of 105 teams)</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Pacific Northwest National Laboratory, WA</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant='top' src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/72735218_2551169915113581_7185908022001008640_o.jpg?_nc_cat=108&_nc_ohc=VkIfyXemktQAQkIPbqF9U5ckD8HMKBZqkpKkO_b7xi-0jpuElWcpYYFjg&_nc_ht=scontent-sea1-1.xx&oh=63d33fa876958a55fbcda0b66aaa78e5&oe=5E457ED5' />
            <Card.Body>
              <Card.Title>Dubhacks 2019</Card.Title>
              <Card.Text>
                <ul>
                  <li>6th round of judging for web application development</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>University of Washington, WA</small>
            </Card.Footer>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Awards;
