import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { CartScreen } from '../CartScreen';
import * as useCartScreen from '../useCartScreen';
import { render } from '../../../../../__tests__/__utils__/wrapperUtils';

const mockUseCartScreen = jest.spyOn(useCartScreen, 'default');
const handleRemoveFromCart = jest.fn();

const mockDefault = {
  cart: [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      image: 'https://via.placeholder.com/100',
      cart: true,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      image: 'https://via.placeholder.com/100',
      cart: true,
    },
  ],
  handleRemoveFromCart,
};

const mockEmpty = {
  cart: [],
  handleRemoveFromCart,
};

describe('CartScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseCartScreen.mockReturnValue(mockDefault);
  });

  it('renders empty cart message when cart is empty', () => {
    mockUseCartScreen.mockReturnValue(mockEmpty);
    const { getByText, toJSON } = render(<CartScreen />);
    expect(getByText('Carrinho vazio!')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders products in the cart', () => {
    const { getByText, toJSON } = render(<CartScreen />);
    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Product 2')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls handleRemoveFromCart when a product is removed', () => {
    const { getByTestId } = render(<CartScreen />);
    fireEvent.press(getByTestId('cart-product-remove-button-1'));
    expect(handleRemoveFromCart).toHaveBeenCalled();
  });
});
