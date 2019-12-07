import React from 'react';
import { Button, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='Home'>
        <NavbarCustom activeTab='/home' />
        {/* <Carousel {...carouselProps} /> */}
        <Card className="bg-dark text-white" style={{ marginTop: '64px' }}>
          <Card.Img src="https://www.contractormag.com/sites/contractormag.com/files/styles/article_featured_retina/public/Cybersecurity2.jpg?itok=Djctp7JP" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title><h1 className='welcome'>Columbia Basin College Cyberhawks</h1></Card.Title>
            <Card.Text>
              <p>
                An elite cybersecurity team, we come from a small school but have big ambitions.
            <br />
                We regularly <Link to='/awards' className='in-text-link'>attend and place</Link> at nationally ranked cybersecurity competitions.
            <br />
                <b>Interested?</b> Click the button below.
          </p>
              <p>
                <Nav.Link target='_blank' href='https://discord.gg/XBgxUnc'><Button size='lg' variant='dark'>Join the Discord</Button></Nav.Link>
              </p>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Home;
