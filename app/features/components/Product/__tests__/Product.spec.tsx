import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { Product } from '../Product';
import { render } from '../../../../../__tests__/__utils__/wrapperUtils';
import {
  invalidProduct,
  mockProduct,
  mockProductNotInCart,
} from './Product.mock';

describe('Product', () => {
  it('renders product name and price correctly', () => {
    const { getByText } = render(<Product {...mockProduct} />);
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('10')).toBeTruthy();
  });

  it('calls onAddToCart with product id when add to cart button is pressed', () => {
    const { getByTestId } = render(<Product {...mockProduct} />);
    fireEvent.press(
      getByTestId(`product-button-add-${mockProduct.product.id}`),
    );
    expect(mockProduct.buttonAdd).toHaveBeenCalledWith(1);
  });

  it('renders placeholder image correctly', () => {
    const { getByTestId } = render(<Product {...mockProduct} />);
    expect(getByTestId(`product-image-${mockProduct.product.id}`)).toHaveProp(
      'source',
      {
        uri: 'https://via.placeholder.com/100',
      },
    );
  });

  it('handles onAddToCart correctly when product id is not a number', () => {
    const { getByTestId } = render(<Product {...invalidProduct} />);
    fireEvent.press(
      getByTestId(`product-button-add-${invalidProduct.product.id}`),
    );
    expect(mockProduct.buttonAdd).toHaveBeenCalledWith('invalid');
  });

  it('does not call onAddToCart if button is disabled', () => {
    const { queryByTestId, getByTestId } = render(
      <Product {...mockProductNotInCart} />,
    );
    expect(queryByTestId('product-button-add')).toBeNull();

    fireEvent.press(
      getByTestId(`product-button-remove-${mockProductNotInCart.product.id}`),
    );
    expect(mockProductNotInCart.buttonRemove).toBeCalledWith(1);
  });
});
