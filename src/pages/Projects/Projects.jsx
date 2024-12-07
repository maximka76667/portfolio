import React, { useContext } from 'react';
import './Projects.css';
import { arrayOf } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Cursor, Project } from '../../components';
import projectProps from '../../interfaces/project';
import CursorContext from '../../contexts/CursorContext';
import { getProjects } from '../../data/projects';

function Projects() {
  const projects = getProjects();

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

export default Projects;
