import React from 'react';
import { Helmet } from 'react-helmet';
import './Projects.css';
import PropTypes from 'prop-types';

function Projects(props) {
  const { projects } = props;

  return (
    <div className="projects">
      <Helmet>
        <title>My projects</title>
      </Helmet>
      <h1 className="projects__heading">Projects</h1>
      <section className="projects__list">
        {
          projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project__info">
                <h2 className="project__name">{project.name}</h2>
                <p className="project__description">{project.description}</p>
                <div className="project__links">
                  <a href={project.link} className="project__link">{project.linkName}</a>
                  <a href={project.repoLink} className="project__link project__repo-link">See GitHub repository</a>
                </div>
              </div>
              <img className="project__img" src={project.img} alt={project.name} />
            </article>
          ))
        }
      </section>
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string,
    linkName: PropTypes.string,
    repoLink: PropTypes.string,
  })).isRequired,
};

export default Projects;
