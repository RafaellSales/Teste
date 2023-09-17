import styled from "styled-components/native";

export const MatchContainer = styled.View`
  flex-direction: column;
  border-radius: 8px;
`;

export const ImageContainer = styled.View`
  flex-direction: column;
`;
export const ResultContainer = styled.View`
  margin: 10px;
  flex-direction: column;
`;

export const TeamLogo = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Image = styled.Image`
  flex: 1;
  margin: 10px;
  width: 30px;
  height: 30px;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  margin: 5px;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-left: 10px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.background_secondary};
  padding: 10px;
`;

export const Number = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.background_secondary};
`;
