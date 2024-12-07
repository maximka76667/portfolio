import PropTypes from 'prop-types';
import React from 'react';
import * as Icons from 'react-icons/si';
import './Badge.css';

const Badge = ({
  stack: { label, icon, link, bgColor, color, hoverColor }
}) => {
  const IconComponent = Icons[icon];

  return (
    <a
      style={{
        '--badge-bg-color': bgColor || '',
        '--badge-text-color': color || '',
        '--badge-hover-color': hoverColor || color
      }}
      className="no-underline flex gap-1 justify-center items-center py-1.5 px-2 rounded-lg badge text-xs sm:text-sm lg:text-base"
      href={link}
    >
      {IconComponent && <IconComponent />}
      <p>{label}</p>
    </a>
  );
};

// Define PropTypes for the stack prop
Badge.propTypes = {
  stack: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    hoverColor: PropTypes.string
  }).isRequired
};

export default Badge;
