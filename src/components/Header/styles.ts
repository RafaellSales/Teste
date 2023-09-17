import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 18px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  padding: 16px;
  font-weight: bold;
`;
