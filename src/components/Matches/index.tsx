import React from "react";
import {
  Container,
  Image,
  ImageContainer,
  MatchContainer,
  Number,
  ResultContainer,
  Title,
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
      <ImageContainer>
        <Image source={{ uri: data.homeTeam.crest }} />
        <Image source={{ uri: data.awayTeam.crest }} />
      </ImageContainer>
      <MatchContainer>
        <Title>{data.homeTeam.name}</Title>
        <Title>{data.awayTeam.name}</Title>
      </MatchContainer>
      <ResultContainer>
        <Number>{data.score.fullTime.home}</Number>
        <Number>{data.score.fullTime.away}</Number>
      </ResultContainer>
    </Container>
  );
}
