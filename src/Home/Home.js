import React from 'react';
import { Button, Nav, Card } from 'react-bootstrap';
import './Home.css';
import picture from './tanner.jpg';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className='Home' style={{ backgroundImage: 'tanner.jpg' }}>
        <NavbarCustom activeTab='/home' />
        <Card className='bg-dark text-white imgbox'>
          <Card.Img src={picture} alt='Card image' className='background' />
          <Card.ImgOverlay>
            <Card.Title><h1 className='welcome'>Columbia Basin College Cyberhawks</h1></Card.Title>
            <Card.Text className='welcome-text'>
              Meetings, competitions, and professional speakers.
            </Card.Text>
            <Nav.Link target='_blank' href='https://discord.gg/XBgxUnc'><Button size='lg' variant='dark'>Discord</Button></Nav.Link>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Home;
