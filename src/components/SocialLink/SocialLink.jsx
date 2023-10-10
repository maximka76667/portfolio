import { shape, string } from 'prop-types';
import React from 'react';

function SocialLink(props) {
  const {
    social: { link, name, icon, color }
  } = props;

  return (
    <a
      href={link}
      className="footer__social-link"
      style={{ backgroundColor: color }}
    >
      <img className="footer__social-icon" src={icon} alt={name} />
    </a>
  );
}

SocialLink.propTypes = {
  social: shape({
    link: string,
    name: string,
    icon: string,
    color: string
  }).isRequired
};

export default SocialLink;
