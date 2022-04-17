import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Project(props) {
  const { project } = props;
  const {
    name, img, color, bgColor,
  } = project;

  const [RGBColor, setRGBColor] = useState('');

  function hexToDecimal(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  }

  useEffect(() => {
    setRGBColor(hexToDecimal(bgColor));
  }, []);

  return (
    <article className="project" key={name}>
      <a href={project.link} className="project__img-link" style={{ backgroundImage: `url(${img})` }}>
        <h2 className="project__name" style={{ background: bgColor, color }}>{name}</h2>
        <div
          className="project__gradient"
          style={{
            background: `linear-gradient(rgba(${RGBColor.r}, ${RGBColor.g}, ${RGBColor.b}, 0) 0%, rgba(${RGBColor.r}, ${RGBColor.g}, ${RGBColor.b}, 0) 17%, rgba(${RGBColor.r}, ${RGBColor.g}, ${RGBColor.b}, 0.8) 77%, rgb(${RGBColor.r}, ${RGBColor.g}, ${RGBColor.b}) 100%)`,
          }}
        />
        {/* <p className="project__description">{project.description}</p> */}
        {/* <div className="project__links">
                    <p href={project.link} className="project__link">{project.linkName}</p>
                    <p href={project.repoLink} className="project__link project__repo-link">
                    See GitHub repository</p>
                  </div> */}

        {/* <img className="project__img" src={project.img} alt={project.name} /> */}
      </a>
    </article>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string,
    linkName: PropTypes.string,
    repoLink: PropTypes.string,
    color: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
