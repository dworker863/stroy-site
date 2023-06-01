import React, { FC } from 'react';
import Project from '../../Blocks/Project/Project';
import { IProjects } from './IProjects';
import { StyledProjects } from './StyledProjects';

const Projects: FC<IProjects> = ({ projects }) => {
  return (
    <StyledProjects>
      {projects.map((project) => (
        <Project key={project.id + project.name} project={project} />
      ))}
    </StyledProjects>
  );
};

export default Projects;
