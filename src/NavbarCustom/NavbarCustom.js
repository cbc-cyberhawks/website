import React from 'react';
import './NavbarCustom.css';
import { Navbar, Nav } from 'react-bootstrap';
import discord from './Discord-Logo-White.png';
import github from './github-icon-white-6.jpg';
import logo from './logo.png';

function NavbarCustom ({ activeTab }) {
  return (
    <div>
      <Navbar fixed='top' className='justify-content-between' bg='dark' variant='dark'>
        <Navbar.Brand>
          <img
            alt=''
            src={logo}
            height='35'
            width='35'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Navbar.Brand>Cyberhawks</Navbar.Brand>
        <Nav activeKey={activeTab} className='mr-auto'>
          <Nav.Link href='/home'>Home</Nav.Link>
          <Nav.Link href='/competitions'>Competitions</Nav.Link>
          <Nav.Link href='/awards'>Awards</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link target='_blank' href='https://discord.gg/XBgxUnc'>
            <img
              alt=''
              height='35'
              width='35'
              className='d-inline-block align-top'
              src={discord}
            />
          </Nav.Link>
          <Nav.Link target='_blank' href='https://github.com/fordepowers/cyberhawks-website'>
            <img
              alt=''
              height='35'
              width='35'
              className='d-inline-block align-top'
              src={github}
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarCustom;
