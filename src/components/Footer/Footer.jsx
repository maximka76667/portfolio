import React from 'react';
import './Footer.css';
import socialLinks from '../../data/socialLinks';
import SocialLink from '../SocialLink/SocialLink';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()}. Maxim Grivennyy
      </p>
      <ul className="footer__menu">
        <li className="footer__menu-item">
          <a href="mailto:maximgriven@gmail.com" className="footer__email">
            maximgriven@gmail.com
          </a>
        </li>
        <li className="footer__menu-item">
          <ul className="footer__social">
            {socialLinks.map((social) => (
              <li
                className={`footer__social-item footer__social-item_${social.className}`}
                key={social.className}
              >
                <SocialLink social={social} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
