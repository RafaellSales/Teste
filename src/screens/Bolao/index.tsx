import React from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Content, Time, Titulo, Version } from "./styles";
export default function Bolao() {
  function Add() {
    Alert.alert("ATENÇÃO", "salvo com sucesso");
  }
  function Remove() {
    Alert.alert("ATENÇÃO", "removido");
  }

  return (
    <Content>
      <Time>
        <Titulo>{"Time da casa"}</Titulo>
        <Input
          iconName="user"
          placeholder="Casa"
          // onChangeText={setName}
          // value={name}
        />
        <Version>vs</Version>
        <Input
          iconName="user"
          placeholder="Fora"
          // onChangeText={setName}
          // value={name}
        />
        <Titulo>{"Time de fora"}</Titulo>
      </Time>
      <Button title="adicionar time" onPress={Add} />
      <Button title="remover time" onPress={Remove} />
    </Content>
  );
}
