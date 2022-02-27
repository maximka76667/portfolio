import './Footer.css';
import logoLinkedin from '../../images/logo-linkedin.svg';
import logoInstagram from '../../images/logo-instagram.svg';
import logoVk from '../../images/logo-vk.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__copyright'>{new Date().getFullYear()} Maxim Grivennyy</p>
      <ul className="footer__menu">
        <li className="footer__menu-item">
          <a href="" className="footer__menu-link">
            <img src={logoLinkedin} alt="" />
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="" className="footer__menu-link">
            <img src={logoInstagram} alt="" />
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="" className="footer__menu-link">
            <img src={logoVk} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;