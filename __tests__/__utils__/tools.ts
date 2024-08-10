import { when } from 'jest-when';
import * as store from '../../app/store/hooks';

export const useSelectorMock = (mock: []): void => {
  const mockedReduxSelector = jest.spyOn(store, 'useAppSelector');
  when(mockedReduxSelector).mockReturnValue(mock as never);
};

export const useDispatchMock = (mock: object): void => {
  const mockedReduxDispatch = jest.spyOn(store, 'useAppDispatch');
  when(mockedReduxDispatch).mockReturnValue(mock as never);
};
