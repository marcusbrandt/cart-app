import React from 'react';
import {
  ButtonAdd,
  ButtonRemove,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  TextAddButton,
  TextRemoveButton,
} from './styles';
import { useProductScreenProps } from '../../screens/Products/types';
import { Product as ProductType } from '../../types';

export const Product = ({
  product,
  buttonAdd,
  buttonRemove,
}: Omit<useProductScreenProps, 'products'> & { product: ProductType }) => {
  return (
    <ProductContainer>
      <ProductImage
        testID={`product-image-${product.id}`}
        source={{ uri: 'https://via.placeholder.com/100' }}
      />
      <ProductTitle testID="product-title">{product.name}</ProductTitle>
      <ProductPrice testID="product-price">{product.price}</ProductPrice>
      {!product.cart && (
        <ButtonAdd
          testID={`product-button-add-${product.id}`}
          onPress={() => buttonAdd(product.id)}
        >
          <TextAddButton>Adicionar</TextAddButton>
        </ButtonAdd>
      )}
      {product.cart && (
        <ButtonRemove
          testID={`product-button-remove-${product.id}`}
          onPress={() => buttonRemove(product.id)}
        >
          <TextRemoveButton>Remover</TextRemoveButton>
        </ButtonRemove>
      )}
    </ProductContainer>
  );
};
