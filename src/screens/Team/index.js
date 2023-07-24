import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList, View, Alert } from "react-native";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import Empty from "../../components/Empty";
import Teams from "../../components/Teams";
import { styles } from "./styles";

export default function Team() {
  const [dados, setDados] = useState(null);
  const [dado, setDado] = useState(null);
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const { id } = route.params;

  useEffect(() => {
    loadTeams();
  }, []);

  async function loadTeams() {
    try {
      const { data } = await api.get(`teams/${id}`);
      setDados(data.squad);
      setDado(data.coach);
      setLoading(true);
    } catch (error) {
      setLoading(true);
      Alert.alert("ATENÇÃO", "Erro ao carregar os dados.");
    }
  }

  return (
    <>
      {loading ? (
        <View style={styles.content}>
          {/* <Text style={styles.titulo}>{dado.name ? dado.name : null}</Text> */}
          <FlatList
            data={dados}
            removeClippedSubviews={false}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View>
                <Empty title={"não encontrado"} />
              </View>
            }
            renderItem={({ item }) => <Teams data={item} />}
          />
        </View>
      ) : (
        <Load />
      )}
    </>
  );
}
