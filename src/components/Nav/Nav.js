import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? 'nav__link_active' : ''}`}>Home</NavLink>
        </li>
        <li className="nav__item" key="home">
          <NavLink to="/about" className={({ isActive }) => `nav__link ${isActive ? 'nav__link_active' : ''}`}>About</NavLink>
        </li>
        <li className="nav__item" key="home">
          <NavLink to="/projects" className={({ isActive }) => `nav__link ${isActive ? 'nav__link_active' : ''}`}>Projects</NavLink>
        </li>
        <li className="nav__item" key="home">
          <NavLink to="/blog" className={({ isActive }) => `nav__link ${isActive ? 'nav__link_active' : ''}`}>Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
