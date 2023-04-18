import { IService } from './../../commonInterfaces/IService';

export interface ICalculator {
  auth: boolean;
  services: IService[];
}
