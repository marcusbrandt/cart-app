import { renderHook, act } from '@testing-library/react-hooks';
import mockReactRedux from 'mock-react-redux';
import useProductScreen from '../useProductScreen';
import { Product, Products } from '../../../types';
import { addToCart, removeFromCart } from '../../../../store/cartSlice';
import { useDispatchMock } from '../../../../../__tests__/__utils__/tools';
import { addProducts, refreshProducts } from '../../../../store/productsSlice';
import * as test from '../../../services/products.service';

jest.mock('../../../services/products.service');

const useGetProductsQuery = test.useGetProductsQuery as jest.Mock;

const initialState: Products & { cart: Product[] } = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      image: 'https://via.placeholder.com/100',
      cart: false,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 10,
      image: 'https://via.placeholder.com/100',
      cart: false,
    },
  ],
  cart: [],
};

const dispatchMock = jest.fn();

describe('useProductScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockReactRedux()
      .state(initialState)
      .give((state) => state, initialState);
    useGetProductsQuery.mockReturnValue({
      data: { products: initialState.products },
      isLoading: false,
      error: undefined,
      refetch: jest.fn(),
    });
    useDispatchMock(dispatchMock);
  });

  it('returns the products from the state', () => {
    const { result } = renderHook(() => useProductScreen());
    expect(result.current.products).toEqual(initialState.products);
  });

  it('returns empty data', () => {
    mockReactRedux()
      .state({ products: [] })
      .give((state) => state, { products: [] });
    useGetProductsQuery.mockReturnValue({
      data: { products: undefined },
      isLoading: false,
      error: undefined,
      refetch: jest.fn(),
    });
    const { result } = renderHook(() => useProductScreen());
    expect(result.current.products).toEqual([]);
  });

  it('adds an item to the cart', () => {
    const { result } = renderHook(() => useProductScreen());

    act(() => {
      result.current.buttonAdd(1);
    });

    expect(dispatchMock).toBeCalledWith(addToCart(initialState.products[0]));
  });

  it('does not add an item to the cart if the id does not exist', () => {
    const { result } = renderHook(() => useProductScreen());

    act(() => {
      result.current.buttonAdd(3);
    });

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toBeCalledWith(addProducts(initialState.products));
  });

  it('removes an item from the cart', () => {
    const { result } = renderHook(() => useProductScreen());

    act(() => {
      result.current.buttonRemove(1);
    });

    expect(dispatchMock).toBeCalledWith(removeFromCart(1));
  });

  it('should return products in cart', () => {
    mockReactRedux()
      .state({
        products: initialState.products,
        cart: [initialState.products[0]],
      })
      .give((state) => state, {
        products: initialState.products,
        cart: [initialState.products[0]],
      });
    const { result } = renderHook(() => useProductScreen());
    expect(result.current.products[0].cart).toBeTruthy();
  });
});
