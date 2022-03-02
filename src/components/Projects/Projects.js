import React from 'react';
import { Helmet } from 'react-helmet';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <h1 className="projects__heading">Projects</h1>
    </div>
  );
}

export default Projects;
