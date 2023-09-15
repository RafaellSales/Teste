import React from "react";
import {
  Container,
  Image,
  MatchContainer,
  Number,
  Title,
  Version,
} from "./styles";

interface Match {
  homeTeam: {
    name: string;
    crest: string;
  };
  awayTeam: {
    name: string;
    crest: string;
  };
  score: {
    fullTime: {
      home: number;
      away: number;
    };
  };
}

interface MatchesProps {
  data: Match;
}

export function Matches({ data }: MatchesProps) {
  return (
    <Container>
      <MatchContainer>
        <Title>{data.homeTeam.name}</Title>
      </MatchContainer>
      <Image source={{ uri: data.homeTeam.crest }} />

      <Number>{data.score.fullTime.home}</Number>
      <Version>vs</Version>
      <Number>{data.score.fullTime.away}</Number>
      <Image source={{ uri: data.awayTeam.crest }} />
      <MatchContainer>
        <Title>{data.awayTeam.name}</Title>
      </MatchContainer>
    </Container>
  );
}
