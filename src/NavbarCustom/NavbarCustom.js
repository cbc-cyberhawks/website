import React from 'react';
import './NavbarCustom.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import discord from './Discord-Logo-White.png';
import github from './github-icon-white-6.jpg';
import logo from './logo.png';

const w = window.innerWidth;
let mobile = false;
if (w <= 570) {
  mobile = true;
}

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
          {!mobile ? <Nav.Link><Link to='/home' className={activeTab === '/home' ? 'menu-active' : 'menu'}>Home</Link></Nav.Link> : null}
          {!mobile ? <Nav.Link><Link to='/competitions' className={activeTab === '/competitions' ? 'menu-active' : 'menu'}>Competitions</Link></Nav.Link> : null}
          {!mobile ? <Nav.Link><Link to='/awards' className={activeTab === '/awards' ? 'menu-active' : 'menu'}>Awards</Link></Nav.Link> : null}
          {!mobile ? <Nav.Link><Link to='/meetings' className={activeTab === '/meetings' ? 'menu-active' : 'menu'}>Meetings</Link></Nav.Link> : null}
        </Nav>
        <Nav>
          {!mobile
            ? <Nav.Link target='_blank' href='https://discord.gg/XBgxUnc'>
              <img
                alt='Discord'
                height='35'
                width='35'
                className='d-inline-block align-top'
                src={discord}
              />
            </Nav.Link>
            : null}
          {
            !mobile
              ? <Nav.Link target='_blank' href='https://github.com/cbc-cyberhawks/website'>
                <img
                  alt='Github'
                  height='35'
                  width='35'
                  className='d-inline-block align-top'
                  src={github}
                />
              </Nav.Link> : null
          }
          <NavDropdown drop='left' title='Menu'>
            <NavDropdown.Item><Nav.Link><Link to='/home' className={activeTab === '/home' ? 'menu-active mobile' : 'menu mobile'}>Home</Link></Nav.Link></NavDropdown.Item>
            <NavDropdown.Item><Nav.Link><Link to='/competitions' className={activeTab === '/competitions' ? 'menu-active mobile' : 'menu mobile'}>Competitions</Link></Nav.Link></NavDropdown.Item>
            <NavDropdown.Item><Nav.Link><Link to='/awards' className={activeTab === '/awards' ? 'menu-active mobile' : 'menu mobile'}>Awards</Link></Nav.Link></NavDropdown.Item>
            <NavDropdown.Item><Nav.Link><Link to='/meetings' className={activeTab === '/meetings' ? 'menu-active mobile' : 'menu mobile'}>Meetings</Link></Nav.Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarCustom;
