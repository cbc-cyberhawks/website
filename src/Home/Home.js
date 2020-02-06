import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Home.css';
import Particles from 'react-particles-js';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    const w = window.innerWidth;
    let mobile = false;
    if (w <= 570) {
      mobile = true;
    }
    return (
      <div className='Home'>
        <NavbarCustom activeTab='/home' />
        <div
          className='particles-container'
          style={{
            background: !mobile ? 'linear-gradient(90deg, #343a40 0%, rgb(0, 0, 0) 100%)' : 'linear-gradient(180deg, #343a40 0%, rgb(0, 0, 0) 30%)',
            position: 'absolute',
            top: !mobile ? 67 : 61,
            left: 0,
            width: '100%',
            height: !mobile ? 'calc(100% - 67px)' : '100%'
          }}
        >
          <Card className='text-center bg-dark text-white imgbox'>
            <Card.ImgOverlay>
              <Card.Title as='h1'>CBC Cyberhawks</Card.Title>
              <Card.Text as='h3'>Meetings, competitions, and professional speakers.</Card.Text>
              <Button size='lg' href='https://discord.gg/XBgxUnc' variant='dark'>Discord</Button>
            </Card.ImgOverlay>
          </Card>
          <Particles
            className='particles-div'
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: !mobile ? 500 : 375
                  }
                },
                size: {
                  value: 2
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab'
                  },
                  onclick: {
                    enable: true,
                    mode: 'push'
                  }
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
