import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View, Alert } from "react-native";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import Empty from "../../components/Empty";
import Competion from "../../components/Competion";
import Header from "../../components/Header";
import { styles } from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const [competition, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);

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

  function NextScreen(code) {
    navigation.navigate("Matche", { id: code });
  }

  return (
    <>
      <Header title={"Todos os Campeonatos"} />
      {loading ? (
        <Load />
      ) : (
        <View style={styles.content}>
          <FlatList
            data={competition}
            removeClippedSubviews={false}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View>
                <Empty title={"não encontrado"} />
              </View>
            }
            renderItem={({ item }) => (
              <Competion data={item} onPress={() => NextScreen(item.id)} />
            )}
          />
        </View>
      )}
    </>
  );
}
