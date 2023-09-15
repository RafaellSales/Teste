import { Container, Text } from "./styles";

interface EmptyProps {
  title: string;
}

export function Empty({ title }: EmptyProps) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}
