import { IProject } from '../../../commonTypesInterfaces/IProject';

export interface ICardProject {
  project: IProject;
  updateProjectFormHandler: () => void;
}
