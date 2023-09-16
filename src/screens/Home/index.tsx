import { useNavigation } from "@react-navigation/native"; // Importe useNavigation
import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Competition } from "../../components/Competion";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { Load } from "../../components/Load";
import { api } from "../../services/api";
import { Container } from "./styles";

interface CompetitionData {
  emblem: string;
  name: string;
  id: number;
}

export default function Home() {
  const navigation = useNavigation(); // Use useNavigation para obter a navegação
  const [competitions, setCompetitions] = useState<CompetitionData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadCompetitions();
  }, []);

  async function loadCompetitions() {
    try {
      const { data } = await api.get("competitions");
      setCompetitions(data.competitions);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert("ATENÇÃO", "ERRO DE CONEXÃO");
    }
  }

  function NextScreen(id: string) {
    navigation.navigate("Matche", { id });
  }

  return (
    <>
      <Header title="CAMPEONATOS" />
      {loading ? (
        <Load />
      ) : (
        <Container>
          <FlatList
            data={competitions}
            removeClippedSubviews={false}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<Empty title={"Não encontrado"} />}
            renderItem={({ item }) => (
              <Competition data={item} onPress={() => NextScreen(item.id)} />
            )}
          />
        </Container>
      )}
    </>
  );
}
