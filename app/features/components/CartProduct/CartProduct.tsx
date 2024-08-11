import {
  CartProductContainer,
  CartProductImage,
  CartProductPrice,
  CartProductRemoveButton,
  CartProductTitle,
} from './styles';
import { Product } from '../../types';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

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
        source={{ uri: product.image }}
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
        <FontAwesome5 name="minus" size={24} color="black" />
      </CartProductRemoveButton>
    </CartProductContainer>
  );
};
