import React from "react";
import { Text, View, Alert } from "react-native";
import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { styles } from "./styles";
export default function Bolao() {
  function Add() {
    Alert.alert("ATENÇÃO", "salvo com sucesso");
  }
  function Remove() {
    Alert.alert("ATENÇÃO", "removido");
  }

  return (
    <>
      <Header title={"Bet"} />
      <View style={styles.content}>
        <View style={styles.time}>
          <Text style={styles.titulo}>{"Time da casa"}</Text>
          <TextInput
            icon="mail"
            placeholder="0"
            autoCapitalize="none"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={styles.verson}>vs</Text>
          <TextInput
            placeholder="0"
            autoCapitalize="none"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={styles.titulo}>{"Time de fora"}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.titulo}>{"Time da casa"}</Text>
          <TextInput
            icon="mail"
            placeholder="0"
            autoCapitalize="none"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={styles.verson}>vs</Text>
          <TextInput
            placeholder="0"
            autoCapitalize="none"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={styles.titulo}>{"Time de fora"}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.titulo}>{"Time da casa"}</Text>
          <TextInput
            icon="mail"
            placeholder="0"
            autoCapitalize="none"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={styles.verson}>vs</Text>
          <TextInput
            placeholder="0"
            autoCapitalize="none"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={styles.titulo}>{"Time de fora"}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.titulo}>{"Time da casa"}</Text>
          <TextInput
            icon="mail"
            placeholder="0"
            autoCapitalize="none"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={styles.verson}>vs</Text>
          <TextInput
            placeholder="0"
            autoCapitalize="none"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={styles.titulo}>{"Time de fora"}</Text>
        </View>
        <Button title="adicionar time" onPress={Add} />
        <Button title="remover time" onPress={Remove} />
      </View>
    </>
  );
}
