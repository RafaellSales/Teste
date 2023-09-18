import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Empty } from "../../components/Empty";
import { Load } from "../../components/Load";
import { Teams } from "../../components/Teams";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TeamMember {
  id: number;
  name: string;
  position: string;
}

// interface Coach {
//   // Defina aqui a tipagem para os campos do treinador (coach)
//   // Por exemplo:
//   name: string;
//   // Outros campos...
// }

interface RouteParams {
  id: string;
}

export default function Team() {
  const [dados, setDados] = useState<TeamMember[] | null>(null);
  // const [dado, setDado] = useState<Coach | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute();
  const { id } = route.params as RouteParams;

  useEffect(() => {
    loadTeams();
  }, []);

  async function loadTeams() {
    try {
      const { data } = await api.get(`teams/${id}`);
      setDados(data.squad);
      // setDado(data.coach);
      setLoading(true);
    } catch (error) {
      setLoading(true);
      Alert.alert("ATENÇÃO", "Erro ao carregar os dados.");
    }
  }

  return (
    <>
      {loading ? (
        <>
          <Container>
            {/* <Text style={styles.titulo}>{dado?.name || null}</Text> */}
            <FlatList
              data={dados || []}
              removeClippedSubviews={false}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={<Empty title={"não encontrado"} />}
              renderItem={({ item }) => <Teams data={item} />}
            />
          </Container>
        </>
      ) : (
        <Load />
      )}
    </>
  );
}
