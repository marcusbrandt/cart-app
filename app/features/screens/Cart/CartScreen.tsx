import { View } from 'react-native';
import useCartScreen from './useCartScreen';
import CartProduct from '../../components/CartProduct';
import { Container, Title } from './styles';

export const CartScreen = () => {
  const { cart, handleRemoveFromCart, totalAmount} = useCartScreen();

  if (!cart || cart.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Title style={{ alignSelf: 'center' }}>Carrinho vazio!</Title>
      </View>
    );
  }

  const text = `Você tem ${cart.length} produto${cart.length > 1 ? 's' : ''} no carrinho`;
  return (
    <Container>
      <Title>{text}</Title>
      {cart.map((product) => (
        <CartProduct
          key={product.id}
          product={product}
          onClick={handleRemoveFromCart}
        />
      ))}
      <Title>Total {totalAmount}</Title>
    </Container>
  );
};
