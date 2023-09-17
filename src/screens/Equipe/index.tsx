import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Empty } from "../../components/Empty";
import { Equipes } from "../../components/Equipes";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Load } from "../../components/Load";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Team {
  id: number;
  crest: string;
  name: string;
}

export default function Equipe() {
  const navigation = useNavigation();
  const [termo, setTermo] = useState("");
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadEquipe();
  }, []);

  async function loadEquipe() {
    try {
      const { data } = await api.get("teams");
      setTeams(data.teams);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert("ATENÇÃO", "ERRO DE CONEXÃO");
    }
  }

  function NextScreen(id: number) {
    navigation.navigate("Team", { id });
  }

  const filteredDado = termo
    ? teams.filter((item) => {
        let name = item.name.toUpperCase();
        let textData = termo.toUpperCase();

        return name.indexOf(textData) > -1;
      })
    : teams;

  return (
    <>
      <Header title="EQUIPES" />
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
            ListEmptyComponent={<Empty title={"não encontrado"} />}
            renderItem={({ item }) => (
              <Equipes data={item} onPress={() => NextScreen(item.id)} />
            )}
          />
        </Container>
      )}
    </>
  );
}
