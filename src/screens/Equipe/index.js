import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View, Alert } from "react-native";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import Empty from "../../components/Empty";
import Header from "../../components/Header";
import Equipes from "../../components/Equipes";
import { styles } from "./styles";

export default function Equipe() {
  const navigation = useNavigation();
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

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

  function NextScreen(id) {
    navigation.navigate("Team", { id: id });
  }

  return (
    <>
      <Header title={"Todas as Equipes"} />

      {loading ? (
        <Load />
      ) : (
        <View style={styles.content}>
          <FlatList
            data={dados}
            removeClippedSubviews={false}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View>
                <Empty title={"não encontrado"} />
              </View>
            }
            renderItem={({ item }) => (
              <Equipes data={item} onPress={() => NextScreen(item.id)} />
            )}
          />
        </View>
      )}
    </>
  );
}
