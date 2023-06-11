import { IService } from '../../../commonTypesInterfaces/IService';

export interface IServiceProps {
  auth: boolean;
  service: IService;
  onClick: () => void;
}
