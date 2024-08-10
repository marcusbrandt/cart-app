import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { removeFromCart } from '../../../store/cartSlice';
import { Product } from '../../types';

const useCartScreen = () => {
  const cart = useAppSelector((state) => state.cart as Product[]);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return {
    cart,
    totalAmount: cart.reduce((acc, item) => acc + item.price, 0),
    handleRemoveFromCart,
  };
};

export default useCartScreen;
