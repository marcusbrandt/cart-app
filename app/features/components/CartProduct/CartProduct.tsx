import {
  CartProductContainer,
  CartProductImage,
  CartProductPrice,
  CartProductRemoveButton,
  CartProductRemoveButtonImage,
  CartProductTitle,
} from './styles';
import { Product } from '../../types';

export const CartProduct = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: (id: number) => void;
}) => {
  return (
    <CartProductContainer>
      <CartProductImage
        testID={`cart-product-image-${product.id}`}
        source={{ uri: 'https://via.placeholder.com/100' }}
      />
      <CartProductTitle testID={`cart-product-title-${product.id}`}>
        {product.name}
      </CartProductTitle>
      <CartProductPrice testID={`cart-product-price-${product.id}`}>
        {product.price}
      </CartProductPrice>
      <CartProductRemoveButton
        testID={`cart-product-remove-button-${product.id}`}
        onPress={() => onClick(product.id)}
      >
        <CartProductRemoveButtonImage
          testID={`cart-product-remove-button-image-${product.id}`}
          source={{ uri: 'https://via.placeholder.com/24' }}
        />
      </CartProductRemoveButton>
    </CartProductContainer>
  );
};
