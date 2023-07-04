import { FC, useState } from 'react';
import CardProject from '../CardProject/CardProject';
import FormProject from '../FormProject/FormProject';
import { StyledProject } from './StyledProject';
import { TProjectProps } from './TProject';

const Project: FC<TProjectProps> = ({ project }) => {
  const [showProjectForm, setShowProjectForm] = useState(false);

  const updateProjectFormHandler = () => {
    setShowProjectForm(!showProjectForm);
  };

  return (
    <StyledProject>
      <CardProject
        key={project.id + project.name}
        project={project}
        updateProjectFormHandler={updateProjectFormHandler}
      />
      {showProjectForm && (
        <FormProject
          project={project}
          updateProjectFormHandler={updateProjectFormHandler}
        />
      )}
    </StyledProject>
  );
};

export default Project;
