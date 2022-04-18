import React from 'react';
import { Helmet } from 'react-helmet';
import './Projects.css';
import PropTypes from 'prop-types';
import { Project } from '../../components/index';

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
            <Project project={project} key={project.link} />
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
    color: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  })).isRequired,
};

export default Projects;
