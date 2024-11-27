import React, { useContext } from 'react';
import './Projects.css';
import { arrayOf } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Cursor, Project } from '../../components';
import projectProps from '../../interfaces/project';
import CursorContext from '../../contexts/CursorContext';

function Projects(props) {
  const { projects } = props;

  return (
    <>
      <div className="projects">
        <Helmet>
          <title>My projects</title>
        </Helmet>
        <h1 className="projects__heading">Projects</h1>
        <section className="projects__list">
          {projects &&
            projects.map((project) => (
              <Project project={project} key={project.link} />
            ))}
        </section>
      </div>
      <Cursor />
    </>
  );
}

Projects.propTypes = {
  projects: arrayOf(projectProps).isRequired
};

export default Projects;
