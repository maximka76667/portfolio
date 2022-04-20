import React from 'react';
import { Helmet } from 'react-helmet';
import './Projects.css';
import {
  arrayOf,
} from 'prop-types';
import { Project } from '../../components/index';
import projectProps from '../../interfaces/project';

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
          projects && projects.map((project) => (
            <Project project={project} key={project.link} />
          ))
        }
      </section>
    </div>
  );
}

Projects.propTypes = {
  projects: arrayOf(projectProps).isRequired,
};

export default Projects;
