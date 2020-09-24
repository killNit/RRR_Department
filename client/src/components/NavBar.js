import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = () => (
<Nav>
  <Nav.Item>
  <Nav.Link href="/home">Home</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="/api/sections">Departments</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="/about">About</Nav.Link>
</Nav.Item>
</Nav>
  
)

export default NavBar;