import { styled } from 'styled-components/native';

export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin-left: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.card};
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 24px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 8px;
`;

export const DefaultTextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.buttonText};
`;

export const TextAddButton = styled(DefaultTextButton)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextRemoveButton = styled(DefaultTextButton)`
  color: ${({ theme }) => theme.colors.text};
`;

const DefaultButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;
  margin-top: 24px;
`;

export const ButtonAdd = styled(DefaultButton)`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const ButtonRemove = styled(DefaultButton)`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.error};
`;
