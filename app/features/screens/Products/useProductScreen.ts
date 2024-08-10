import { useEffect } from 'react';
import { useProductScreenProps } from './types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Product, Products } from '../../types';
import { addProducts, refreshProducts } from '../../../store/productsSlice';
import { addToCart, removeFromCart } from '../../../store/cartSlice';
import { fetchProducts } from '../../services/products.service';

const useProductScreen: () => useProductScreenProps = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products as Product[]);
  const cart = useAppSelector((state) => state.cart as Product[]);

  useEffect(() => {
    dispatch(refreshProducts([]));
    fetchProducts()
      .then((response) => response.json())
      .then((data) =>
        (data as Products).products.map((product) => ({
          ...product,
          cart: false,
        })),
      )
      .then((data) => dispatch(addProducts(data)))
      .catch((error) => console.error(error));
  }, []);

  const buttonAdd = (id: number) => {
    const addProductCart = products.find((product) => product.id === id);
    if (addProductCart) {
      dispatch(addToCart(addProductCart));
    }
  };

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
    buttonAdd,
    buttonRemove,
  };
};

export default useProductScreen;
