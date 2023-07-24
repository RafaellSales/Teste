import React, { useState, useCallback } from "react";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { FlatList, View, Alert } from "react-native";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import Empty from "../../components/Empty";
import Matches from "../../components/Matches";
import { styles } from "./styles";

export default function Matche() {
  const [getMatche, setMatche] = useState([]);
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const { id } = route.params;

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
        <View style={styles.content}>
          <FlatList
            data={getMatche}
            removeClippedSubviews={false}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View>
                <Empty title={"não encontrado"} />
              </View>
            }
            renderItem={({ item }) => <Matches data={item} />}
          />
        </View>
      ) : (
        <Load />
      )}
    </>
  );
}
