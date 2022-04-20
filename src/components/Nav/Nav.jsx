import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  const navLinkActiveClass = ({ isActive }) => `nav__link${isActive ? ' nav__link_active' : ''}`;

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className={navLinkActiveClass}>Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className={navLinkActiveClass}>About</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/projects" className={navLinkActiveClass}>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
