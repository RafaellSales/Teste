import { useFocusEffect, useRoute } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Empty } from "../../components/Empty";
import { Load } from "../../components/Load";
import { Matches } from "../../components/Matches";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Match {
  id: number;
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

interface RouteParams {
  id: number;
}

export default function Matche() {
  const [getMatche, setMatche] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute();
  const { id } = route.params as RouteParams;

  useFocusEffect(
    useCallback(() => {
      loadMatches();
    }, [])
  );

  async function loadMatches() {
    try {
      const { data } = await api.get(`competitions/${id}/matches`);
      setMatche(data.matches);
      setLoading(true);
    } catch (error) {
      setLoading(true);
      Alert.alert("ATENÇÃO", "ERRO DE CONEXÃO");
    }
  }

  return (
    <>
      {loading ? (
        <Container>
          <FlatList
            data={getMatche}
            removeClippedSubviews={false}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<Empty title={"não encontrado"} />}
            renderItem={({ item }) => <Matches data={item} />}
          />
        </Container>
      ) : (
        <Load />
      )}
    </>
  );
}
