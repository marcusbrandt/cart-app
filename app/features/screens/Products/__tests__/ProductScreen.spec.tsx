import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { ProductScreen } from '../ProductScreen';
import { render } from '../../../../../__tests__/__utils__/wrapperUtils';
import * as useProductScreen from '../useProductScreen';

const useProductScreenMock = jest.spyOn(useProductScreen, 'default');
const buttonRemove = jest.fn();
const buttonAdd = jest.fn();
const mockProducts = [
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
    price: 20,
    image: 'https://via.placeholder.com/100',
    cart: true,
  },
];

describe('ProductScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useProductScreenMock.mockReturnValue({
      products: mockProducts,
      buttonRemove,
      buttonAdd,
      isLoading: false,
      error: undefined,
    });
  });
  it('renders empty product list message when no products are available', () => {
    useProductScreenMock.mockReturnValue({
      products: [],
      buttonAdd,
      buttonRemove,
      isLoading: false,
      error: undefined,
    });
    const { getByText } = render(<ProductScreen />);
    expect(getByText('Não foi possível encontrar nenhum produto')).toBeTruthy();
  });

  it('renders products in the product list', () => {
    const { getByText } = render(<ProductScreen />);
    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Product 2')).toBeTruthy();
  });

  it('calls buttonAdd when a product is added to the cart', () => {
    const { getByTestId } = render(<ProductScreen />);
    fireEvent.press(getByTestId(`product-button-add-${mockProducts[0].id}`));
    expect(buttonAdd).toHaveBeenCalled();
  });

  it('calls buttonRemove when a product is added to the cart', () => {
    const { getByTestId } = render(<ProductScreen />);
    fireEvent.press(getByTestId(`product-button-remove-${mockProducts[1].id}`));
    expect(buttonRemove).toHaveBeenCalled();
  });
});
