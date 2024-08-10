import { Products } from '../../types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export interface useProductScreenProps extends Products {
  buttonAdd: (id: number) => void;
  buttonRemove: (id: number) => void;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
}
