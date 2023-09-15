import { Container, Image, Title } from "./styles";

interface EquipesProps {
  data: {
    crest: string;
    name: string;
  };
  onPress?: () => void;
}

export function Equipes({ data, onPress }: EquipesProps) {
  return (
    <Container onPress={onPress}>
      <Image source={{ uri: data.crest }} />
      <Title>{data.name}</Title>
    </Container>
  );
}
