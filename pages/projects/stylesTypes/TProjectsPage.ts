import { IProject } from '../../../commonTypesInterfaces/IProject';

export type TProjectsPageProps = {
  auth: boolean;
  projects: IProject[];
};

export type TProjectsContext = {
  auth: boolean;
  showFormHandler: () => void;
};
