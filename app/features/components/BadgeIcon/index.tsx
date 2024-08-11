import { styled } from 'styled-components/native';
import { useAppSelector } from '../../../store/hooks';

const BadgeContainer = styled.View`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const BadgeIcon = () => {
  const cart = useAppSelector((state) => state.cart);

  if (cart.length === 0) return null;
  return <BadgeContainer />;
};

export default BadgeIcon;
