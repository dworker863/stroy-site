import { IService } from '../../../commonTypesInterfaces/IService';

export type TCartServiceProps = {
  service: IService;
  cart: { service: string; sum: number }[];
  changeCartHandler: (cart: { service: string; sum: number }[]) => void;
};
