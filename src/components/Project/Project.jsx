import React, { useEffect, useState } from 'react';
import './Project.css';
import projectProps from '../../interfaces/project';
import hexToDecimal from '../../utils/hexToDecimal';
import Badge from '../Badge/Badge';

function Project({
  project: { frontStack, backStack, otherStacks, ...project }
}) {
  const RGBColor = hexToDecimal(project.bgColor);

  return (
    <article
      className="project"
      key={project.name}
      style={{
        '--color': project.color,
        '--bgColor': project.bgColor,
        '--r': RGBColor.r,
        '--g': RGBColor.g,
        '--b': RGBColor.b
      }}
    >
      <div className="absolute top-0 right-0 flex z-10 p-2 gap-1.5 flex-col items-end">
        {frontStack && (
          <div className="flex gap-1 flex-wrap justify-end">
            {frontStack?.map((stack) => (
              <Badge key={stack.label} stack={stack} />
            ))}
          </div>
        )}

        {backStack && (
          <div className="flex gap-1 flex-wrap justify-end">
            {backStack?.map((stack) => (
              <Badge key={stack.label} stack={stack} />
            ))}
          </div>
        )}

        {otherStacks && (
          <div className="flex gap-1 flex-wrap justify-end">
            {otherStacks?.map((stack) => (
              <Badge key={stack.label} stack={stack} />
            ))}
          </div>
        )}
      </div>
      <a
        href={project.link}
        className="project__img-link"
        style={{ backgroundImage: `url(${project.img})` }}
      >
        <div className="flex project__info w-full pr-12 pl-4 pb-2 pt-3 gap-2 items-center justify-start">
          <h2 className="project__name">{project.name}</h2>
          <p className="project__description hidden md:flex">
            {project.description}
          </p>
        </div>
        <div className="project__gradient" />
      </a>
      <a className="project__repoLink" href={project.repoLink}>
        <svg
          className="repoLinkSvg"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="repoLinkSvg__path"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      </a>
    </article>
  );
}

Project.propTypes = {
  project: projectProps.isRequired
};

export default Project;
