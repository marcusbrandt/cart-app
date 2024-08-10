import { Products } from '../../types';

export interface useProductScreenProps extends Products {
  buttonAdd: (id: number) => void;
  buttonRemove: (id: number) => void;
}
