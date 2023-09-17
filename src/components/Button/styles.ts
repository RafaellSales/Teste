import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 50%;
  margin: 1px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.background_secondary};
`;
