import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import './Awards.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';
import cyberforce from './doe-cyberforce-competition-2019_49076116333_o.jpg';

class Awards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='Awards'>
        <NavbarCustom activeTab='/awards' />
        <h1>Awards</h1>
        <CardColumns style={{ width: '90rem', margin: 'auto' }}>
          <Card>
            <Card.Img variant="top" src={cyberforce} />
            <Card.Body>
              <Card.Title>Cyberforce 2019</Card.Title>
              <Card.Text>
                1st place from Washington State.<br/>
                14th team overall (out of 105 teams).
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Pacific Northwest National Laboratory</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/72735218_2551169915113581_7185908022001008640_o.jpg?_nc_cat=108&_nc_ohc=VkIfyXemktQAQkIPbqF9U5ckD8HMKBZqkpKkO_b7xi-0jpuElWcpYYFjg&_nc_ht=scontent-sea1-1.xx&oh=63d33fa876958a55fbcda0b66aaa78e5&oe=5E457ED5' />
            <Card.Body>
              <Card.Title>Dubhacks 2019</Card.Title>
              <Card.Text>
                1st place from Washington State.<br/>
                14th team overall (out of 105 teams).
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Bellevue, WA</small>
            </Card.Footer>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Awards;
