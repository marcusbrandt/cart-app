import Product from "@/src/components/Product";
import useProductScreen from "@/src/screens/Products/useProductScreen";
import {ScrollView} from "react-native";
import { Container } from './styles';

export const ProductScreen = () => {
    const {products, buttonAdd, buttonRemove} = useProductScreen();
    return (
        <ScrollView style={ { flex: 1 } }>
            <Container>
                {
                    products?.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                            buttonAdd={buttonAdd}
                            buttonRemove={buttonRemove}
                        />))
                }
            </Container>
        </ScrollView>
    )
}
