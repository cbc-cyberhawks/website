import React from 'react';
import './NavbarCustom.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
          <Nav.Link><Link to='/home' className='menu'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/competitions' className='menu'>Competitions</Link></Nav.Link>
          <Nav.Link><Link to='/awards' className='menu'>Awards</Link></Nav.Link>
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
          <Nav.Link target='_blank' href='https://github.com/cbc-cyberhawks/cbc-cyberhawks.github.io'>
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
