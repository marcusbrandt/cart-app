import { Text, View } from 'react-native';
import useCartScreen from './useCartScreen';
import CartProduct from '../../components/CartProduct';

export const CartScreen = () => {
  const { cart, handleRemoveFromCart } = useCartScreen();

  if (!cart || cart.length === 0) {
    return (
      <View style={{ alignSelf: 'center', alignItems: 'center' }}>
        <Text>Carrinho vazio!</Text>
      </View>
    );
  }
  return (
    <View>
      {cart.map((product) => (
        <CartProduct
          key={product.id}
          product={product}
          onClick={handleRemoveFromCart}
        />
      ))}
    </View>
  );
};
