import React from "react";
import {
    ButtonAdd, ButtonRemove,
    ProductContainer,
    ProductImage,
    ProductPrice,
    ProductTitle, TextAddButton, TextRemoveButton
} from './styles';

import { Product as ProductI } from '@/src/screens/Products/types';

interface ProductProps {
    product: ProductI;
    buttonAdd: (id: number) => void;
    buttonRemove: (id: number) => void;
}

export const Product = ({product, buttonAdd, buttonRemove}: ProductProps) => {

    return(
        <ProductContainer>
            <ProductImage source={{uri: 'https://via.placeholder.com/100'}} />
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            {!product.cart && <ButtonAdd>
                <TextAddButton onPress={() => buttonAdd(product.id)}>
                    Adicionar
                </TextAddButton>
            </ButtonAdd>
            }
            {product.cart &&
                <ButtonRemove>
                    <TextRemoveButton onPress={() => buttonRemove(product.id)}>
                        Remover
                    </TextRemoveButton>
                </ButtonRemove>
            }
        </ProductContainer>
    )
}
