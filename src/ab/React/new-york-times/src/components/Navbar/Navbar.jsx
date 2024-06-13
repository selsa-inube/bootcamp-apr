// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Nav, NavList, NavItem, NavP, NavItemLink } from './Navbar.styles.jsx';

const Navbar = ({ items }) => {
  return (
    <Nav>
      <div>
        <NavP>Thursday</NavP>
        <time className="date">May 21, 2020</time>
      </div>
      <NavList>
        {items.map((item, index) => (
          <NavItem key={index}>
            <NavItemLink href={item.href}>{item.text}</NavItemLink>
          </NavItem>
        ))}
      </NavList>
      <i className="bx bx-dots-horizontal-rounded"></i>
    </Nav>
  );
};

export default Navbar;
