import { IProject } from './../../../commonInterfaces/IProject';

export interface ICardProject {
  project: IProject;
  updateProjectFormHandler: () => void;
}
