import React from 'react';
import './Footer.css';
import logoLinkedin from '../../images/logo-linkedin.svg';
import logoInstagram from '../../images/logo-instagram.svg';
import logoVk from '../../images/logo-vk.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        ©
        {' '}
        {new Date().getFullYear()}
        . Maxim Grivennyy
      </p>
      <ul className="footer__menu">
        <li className="footer__menu-item">
          <a href="https://www.linkedin.com/in/maxim-grivennyy-ba9a31231" className="footer__menu-link">
            <img className="footer__menu-icon" src={logoLinkedin} alt="" />
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="https://www.instagram.com/maximka76667" className="footer__menu-link">
            <img className="footer__menu-icon" src={logoInstagram} alt="" />
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="https://vk.com/maximgriven" className="footer__menu-link">
            <img className="footer__menu-icon" src={logoVk} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
