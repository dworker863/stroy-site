export interface IFormService {
  id?: number;
  name?: string;
  measure?: string;
  price?: number;
  setShowServiceForm?: (showServiceForm: boolean) => void;
}
