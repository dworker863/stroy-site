import { FC } from 'react';
import Project from '../../Blocks/Project/Project';
import { TProjectsProps } from './TProjects';
import { StyledProjects } from './StyledProjects';

const Projects: FC<TProjectsProps> = ({ projects }) => {
  return (
    <StyledProjects>
      {projects.map((project) => (
        <Project key={project.id + project.name} project={project} />
      ))}
    </StyledProjects>
  );
};

export default Projects;
