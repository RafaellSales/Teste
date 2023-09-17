import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const Player = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;
