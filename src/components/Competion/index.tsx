import { Container, Image, Title } from "./styles";

interface CompetitionProps {
  data: {
    emblem: string;
    name: string;
  };
  onPress?: () => void;
}

export function Competition({ data, onPress }: CompetitionProps) {
  return (
    <Container onPress={onPress}>
      <Image source={{ uri: data.emblem }} />
      <Title>{data.name}</Title>
    </Container>
  );
}
