import { renderHook, act } from '@testing-library/react-hooks';
import { mockReactRedux } from 'mock-react-redux';
import useCartScreen from '../useCartScreen';
import { useDispatchMock } from '../../../../../__tests__/__utils__/tools';
import { removeFromCart } from '../../../../store/cartSlice';

const dispatchMock = jest.fn();

describe('useCartScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockReactRedux().state({ cart: [{ id: '1' }] });
    useDispatchMock(dispatchMock);
  });

  it('returns the cart from the state', () => {
    const { result } = renderHook(() => useCartScreen());
    expect(result.current.cart).toStrictEqual([{ id: '1' }]);
  });

  it('removes an item from the cart', () => {
    const { result } = renderHook(() => useCartScreen());

    act(() => {
      result.current.handleRemoveFromCart(1);
    });

    expect(dispatchMock).toBeCalledWith(removeFromCart(1));
  });
});
