import { IService } from '../../../commonInterfaces/IService';

export interface IServiceProps {
  auth: boolean;
  service: IService;
  onClick: () => void;
}
