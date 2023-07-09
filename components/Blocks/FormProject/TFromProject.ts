import { Dispatch, SetStateAction } from 'react';
import { IProject } from '../../../commonTypesInterfaces/IProject';

export type TFormProjectProps = {
  project?: IProject;
  updateProjectFormHandler?: () => void;
};

export type TStyledFormReview = {
  show: boolean;
};
