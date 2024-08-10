import { ScrollView, View, Text } from 'react-native';
import { Container } from './styles';
import useProductScreen from './useProductScreen';
import Product from '../../components/Product';

export const ProductScreen = () => {
  const { products, buttonAdd, buttonRemove } = useProductScreen();

  if (!products || products.length === 0) {
    return (
      <View style={{ alignSelf: 'center', alignItems: 'center' }}>
        <Text>Não foi possível encontrar nenhum produto</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            buttonAdd={buttonAdd}
            buttonRemove={buttonRemove}
          />
        ))}
      </Container>
    </ScrollView>
  );
};
