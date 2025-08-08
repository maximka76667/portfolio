import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProgressiveImage = ({ src, href, alt, children, ...props }) => {
  const placeholderSrc = `reduced-${src.slice(0, -4)}.jpg`;
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded';

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <a
      href={href}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + src})`
      }}
      alt={alt || ''}
      className={`project__img-link ${customClass}`}
      {...props}
    >
      {children}
    </a>
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node
};

export default ProgressiveImage;
