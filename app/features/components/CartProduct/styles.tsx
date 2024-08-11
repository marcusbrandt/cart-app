import { styled } from 'styled-components/native';

export const CartProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.card};
`;

export const CartProductImage = styled.Image`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartProductTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const CartProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const CartProductRemoveButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.buttonText};
`;
