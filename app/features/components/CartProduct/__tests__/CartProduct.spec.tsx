import React from 'react';
import CartProduct from '../../CartProduct';
import { fireEvent } from '@testing-library/react-native';
import { Product } from '../../../types';
import { render } from '../../../../../__tests__/__utils__/wrapperUtils';

const mockProduct: Product = {
  id: 1,
  name: 'Test Product',
  price: 10,
  image: 'https://via.placeholder.com/100',
  cart: false,
};

describe('CartProduct', () => {
  it('renders product details correctly', () => {
    const { getByText } = render(
      <CartProduct product={mockProduct} onClick={() => {}} />,
    );
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('10')).toBeTruthy();
  });

  it('calls onClick with product id when remove button is pressed', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <CartProduct product={mockProduct} onClick={onClickMock} />,
    );

    fireEvent.press(
      getByTestId(`cart-product-remove-button-${mockProduct.id}`),
    );
    expect(onClickMock).toHaveBeenCalledWith(1);
  });

  it('renders placeholder images correctly', () => {
    const { getByTestId } = render(
      <CartProduct product={mockProduct} onClick={() => {}} />,
    );
    expect(getByTestId(`cart-product-image-${mockProduct.id}`)).toHaveProp(
      'source',
      {
        uri: 'https://via.placeholder.com/100',
      },
    );
    expect(
      getByTestId(`cart-product-remove-button-image-${mockProduct.id}`),
    ).toHaveProp('source', {
      uri: 'https://via.placeholder.com/24',
    });
  });

  it('handles onClick correctly when product id is not a number', () => {
    const invalidProduct = {
      ...mockProduct,
      id: 'invalid' as unknown as number,
    };
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <CartProduct product={invalidProduct} onClick={onClickMock} />,
    );
    fireEvent.press(
      getByTestId(`cart-product-remove-button-${invalidProduct.id}`),
    );
    expect(onClickMock).toHaveBeenCalledWith('invalid');
  });
});
