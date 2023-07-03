import { IService } from '../../../commonTypesInterfaces/IService';

export type TCartProps = {
  cartServices: IService[];
  clearCartHandler: () => void;
};
