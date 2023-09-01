import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="a">
        <FaHome size={24} />
      </a>
      <a href="b">
        <FaUserAlt />
      </a>
      <a href="b">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
