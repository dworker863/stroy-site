import { IProject } from '../../commonTypesInterfaces/IProject';

export interface IProjectsPage {
  auth: boolean;
  projects: IProject[];
}

export interface IProjectsContext {
  auth: boolean;
  showFormHandler: () => void;
}
