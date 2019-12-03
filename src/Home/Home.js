import React from 'react';
import { Jumbotron, Button, Nav, Navbar } from 'react-bootstrap';
import Carousel from '@bit/limio.landing.carousel';
import { Link } from 'react-router-dom';
import './Home.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    const carouselProps = {
      imageChangeInterval: 15000,
      height: 3.25,
      images: [
        {
          headline: 'Columbia Basin College',
          subline: 'Pasco, WA',
          url: 'https://www.contractormag.com/sites/contractormag.com/files/styles/article_featured_retina/public/Cybersecurity2.jpg?itok=Djctp7JP'
        },
        {
          headline: 'CyberForce 2019',
          subline: 'Pacific Northwest National Laboratory',
          url: 'https://cyberforcecompetition.com/wp-content/uploads/2019/11/shutterstock_159902675_hex_671fc8-scaled.jpg'
        },
        {
          headline: 'Dubhacks 2019',
          subline: 'Bellevue, WA',
          url: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/72735218_2551169915113581_7185908022001008640_o.jpg?_nc_cat=108&_nc_ohc=VkIfyXemktQAQkIPbqF9U5ckD8HMKBZqkpKkO_b7xi-0jpuElWcpYYFjg&_nc_ht=scontent-sea1-1.xx&oh=63d33fa876958a55fbcda0b66aaa78e5&oe=5E457ED5'
        }
      ]
    };
    return (
      <div className='Home'>
        <NavbarCustom activeTab='/home' />
        <Carousel {...carouselProps} />
        <Jumbotron>
          <h1>Welcome to the CBC Cyberhawks.</h1>
          <p>
            An elite cybersecurity team, we come from a small school but have big ambitions.
            <br />
            We regularly <Link to='/awards'>attend and place</Link> at nationally ranked cybersecurity competitions.
            <br />
            <b>Interested?</b> Click the button below.
          </p>
          <p>
            <Nav.Link target='_blank' href='https://discord.gg/XBgxUnc'><Button size='lg' variant='dark'>Join the Discord</Button></Nav.Link>
          </p>
        </Jumbotron>
        <hr />
        <Navbar fixed='bottom' bg='dark' variant='dark'>
          <p>About Columbia Basin College
            Columbia Basin College (CBC) is a community college with a campus located in Pasco, Washington.
          </p>
          <Nav.Link target='_blank' href='https://www.columbiabasin.edu/'><Button size='lg' variant='primary'>Website</Button></Nav.Link>
        </Navbar>
      </div>
    );
  }
}

export default Home;
