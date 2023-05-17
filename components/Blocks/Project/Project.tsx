import React, { FC, useState } from 'react';
import CardProject from '../CardProject/CardProject';
import FormProject from '../FormProject/FormProject';
import { IProjectState } from './IProject';

const Project: FC<IProjectState> = ({ project }) => {
  const [showProjectForm, setShowProjectForm] = useState(false);

  const updateProjectFormHandler = () => {
    setShowProjectForm(!showProjectForm);
  };

  return (
    <div>
      <CardProject
        key={project.id + project.name}
        project={project}
        updateProjectFormHandler={updateProjectFormHandler}
      />
      {showProjectForm && <FormProject project={project} />}
    </div>
  );
};

export default Project;
