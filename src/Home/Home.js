import React from 'react';
import { Button, Card } from 'react-bootstrap';
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
      <div className='Home'>
        <NavbarCustom activeTab='/home' />
        <Card className='text-center bg-dark text-white imgbox'>
          <img alt='tanner' src={picture} className='bg' />
          <Card.ImgOverlay>
            <Card.Title>Columbia Basin College Cyberhawks</Card.Title>
            <Card.Text>Meetings, competitions, and professional speakers.</Card.Text>
            <Button size='lg' href='https://discord.gg/XBgxUnc' variant='dark'>Discord</Button>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Home;
