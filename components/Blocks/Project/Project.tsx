import { FC, useState } from 'react';
import CardProject from '../CardProject/CardProject';
import FormProject from '../FormProject/FormProject';
import { TProjectProps } from './TProject';

const Project: FC<TProjectProps> = ({ project }) => {
  const [showProjectForm, setShowProjectForm] = useState(false);

  const updateProjectFormHandler = () => {
    setShowProjectForm(!showProjectForm);
  };

  return (
    <>
      <CardProject
        key={project.id + project.name}
        project={project}
        updateProjectFormHandler={updateProjectFormHandler}
      />
      {showProjectForm && <FormProject project={project} />}
    </>
  );
};

export default Project;
