import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Empty } from "../../components/Empty";
import { Equipes } from "../../components/Equipes";
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
  const [dados, setDados] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadEquipe();
  }, []);

  async function loadEquipe() {
    try {
      const { data } = await api.get("teams");
      setDados(data.teams);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert("ATENÇÃO", "ERRO DE CONEXÃO");
    }
  }

  function NextScreen(id: number) {
    navigation.navigate("Team", { id });
  }

  return (
    <>
      {loading ? (
        <Load />
      ) : (
        <Container>
          <FlatList
            data={dados}
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
