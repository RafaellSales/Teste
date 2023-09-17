import { useNavigation } from "@react-navigation/native"; // Importe useNavigation
import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Competition } from "../../components/Competion";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Load } from "../../components/Load";
import { api } from "../../services/api";
import { Container } from "./styles";

interface CompetitionData {
  emblem: string;
  name: string;
  id: string;
}

export default function Home() {
  const navigation = useNavigation();
  const [termo, setTermo] = useState("");
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

  const filteredDado = termo
    ? competitions.filter((item) => {
        let name = item.name.toUpperCase();
        let textData = termo.toUpperCase();

        return name.indexOf(textData) > -1;
      })
    : competitions;

  return (
    <>
      <Header title="CAMPEONATOS" />
      <Input
        iconName="search"
        onChangeText={(nextValue) => setTermo(nextValue)}
        value={termo}
        placeholder="Digite aqui para pesquisar"
      />
      {loading ? (
        <Load />
      ) : (
        <Container>
          <FlatList
            data={filteredDado}
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
