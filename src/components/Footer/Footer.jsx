import React from 'react';
import './Footer.css';
import logoLinkedin from '../../assets/images/logo-linkedin-2.svg';
import logoInstagram from '../../assets/images/logo-instagram.svg';
import logoVk from '../../assets/images/logo-vk.svg';
import logoGithub from '../../assets/images/logo-github.svg';

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
          <a href="mailto:maximgriven@gmail.com" className="footer__email">maximgriven@gmail.com</a>
        </li>
        <div className="footer__social">
          <li className="footer__menu-item footer__menu-item_github">
            <a href="https://github.com/maximka76667" className="footer__menu-link" style={{ backgroundColor: '#181717' }}>
              <img className="footer__menu-icon" src={logoGithub} alt="GitHub icon" />
            </a>
          </li>
          <li className="footer__menu-item footer__menu-item_linkedin">
            <a href="https://www.linkedin.com/in/maxim-grivennyy-ba9a31231" className="footer__menu-link" style={{ backgroundColor: '#0A66C2' }}>
              <img className="footer__menu-icon" src={logoLinkedin} alt="LinkedIn icon" />
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="https://www.instagram.com/maximka76667" className="footer__menu-link" style={{ backgroundColor: 'rgb(197, 60, 117)' }}>
              <img className="footer__menu-icon" src={logoInstagram} alt="Instagram icon" />
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="https://vk.com/maximgriven" className="footer__menu-link" style={{ backgroundColor: 'rgb(81, 129, 184)' }}>
              <img className="footer__menu-icon" src={logoVk} alt="Vkontakte icon" />
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
