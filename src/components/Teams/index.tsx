import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Container, Player, SubTitle, Title } from "./styles";

interface Team {
  id: Number;
  name: string;
  position: string;
}

interface TeamsProps {
  data: Team;
}

export function Teams({ data }: TeamsProps) {
  return (
    <Container>
      <Entypo name="user" size={24} color="black" />
      <Player>
        <Title>{data.name}</Title>
        <SubTitle>{data.position}</SubTitle>
      </Player>
    </Container>
  );
}
