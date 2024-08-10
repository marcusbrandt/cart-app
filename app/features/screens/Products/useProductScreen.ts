import { useEffect } from 'react';
import { useProductScreenProps } from './types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Product } from '../../types';
import { addProducts } from '../../../store/productsSlice';
import { addToCart, removeFromCart } from '../../../store/cartSlice';
import { useGetProductsQuery } from '../../services/products.service';

const useProductScreen: () => useProductScreenProps = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products as Product[]);
  const cart = useAppSelector((state) => state.cart as Product[]);
  const { data, error, isLoading } = useGetProductsQuery({});

  const buttonAdd = (id: number) => {
    const addProductCart = products.find((product) => product.id === id);
    if (addProductCart) {
      dispatch(addToCart(addProductCart));
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(addProducts(data.products));
    }
  }, [data]);

  const buttonRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const productsWithCart = products.map((product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      return { ...product, cart: true };
    }

    return { ...product, cart: false };
  });

  return {
    products: productsWithCart,
    error,
    isLoading,
    buttonAdd,
    buttonRemove,
  };
};

export default useProductScreen;
