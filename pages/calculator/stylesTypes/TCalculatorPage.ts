import { IService } from '../../../commonTypesInterfaces/IService';

export type TCalculatorPageProps = {
  auth: boolean;
  services: IService[];
};

export type TCalculatorContext = {
  serviceButtonHandler: (service: IService) => void;
};
