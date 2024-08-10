import { ScrollView, View, Text } from 'react-native';
import { Container } from './styles';
import useProductScreen from './useProductScreen';
import Product from '../../components/Product';

export const ProductScreen = () => {
  const { products, buttonAdd, buttonRemove, isLoading, error } =
    useProductScreen();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ alignSelf: 'center' }}>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ alignSelf: 'center' }}>
          Ocorreu um erro ao carregar os produtos
        </Text>
      </View>
    );
  }

  if (!products || products.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ alignSelf: 'center' }}>
          Não foi possível encontrar nenhum produto
        </Text>
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
