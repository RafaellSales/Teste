import { ActivityIndicator } from "react-native";
import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
  loading?: boolean;
  onPress?: () => void;
}

export function Button({ title, loading = false, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="rgb(240, 12, 12)" size={32} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
