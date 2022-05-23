import React from 'react';
import { Nav, Navlink, Navicon, Bars } from './navbar.element.js';

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Navlink to="/">Pizza</Navlink>
      <Navicon onClick={toggle}>
          <p>Menu</p>
          <Bars />
      </Navicon>

    </Nav>
  )
}

export default Navbar;
