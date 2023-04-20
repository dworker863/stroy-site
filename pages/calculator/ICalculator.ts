import { IService } from './../../commonInterfaces/IService';

export interface ICalculator {
  auth: boolean;
  services: IService[];
}

export interface ICalculatorContext {
  serviceButtonHandler: (value: IService) => void;
}
