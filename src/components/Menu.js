import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#/">Dog Book</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#/breeds">Breeds</Nav.Link>
              <Nav.Link href="#/about">About</Nav.Link>
            </Nav>
          </Navbar>
    )
}

export default Menu;