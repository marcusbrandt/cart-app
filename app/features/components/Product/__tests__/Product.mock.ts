import { useProductScreenProps } from '../../../screens/Products/types';
import { Product as ProductType } from '../../../types';

export const mockProduct: Omit<useProductScreenProps, 'products'> & {
  product: ProductType;
} = {
  product: {
    id: 1,
    name: 'Test Product',
    price: 10,
    image: 'https://via.placeholder.com/100',
    cart: false,
  },
  buttonAdd: jest.fn(),
  buttonRemove: jest.fn(),
};

export const invalidProduct = {
  ...mockProduct,
  product: {
    ...mockProduct.product,
    ...{ id: 'invalid' as unknown as number },
  },
};

export const mockProductNotInCart = {
  ...mockProduct,
  product: { ...mockProduct.product, ...{ cart: true } },
};
