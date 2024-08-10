import { View } from 'react-native';
import ProductScreen from './features/screens/Products';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ProductScreen />
    </View>
  );
}
