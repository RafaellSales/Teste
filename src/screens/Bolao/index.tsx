import React from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Buttons, Content, Time, Version } from "./styles";
export default function Bolao() {
  function Add() {
    Alert.alert("ATENÇÃO", "salvo com sucesso");
  }
  function Remove() {
    Alert.alert("ATENÇÃO", "removido");
  }

  return (
    <Content>
      <Header title="BET" />
      <Time>
        <Input
          iconName="user"
          placeholder="Time da casa"
          // onChangeText={setName}
          // value={name}
        />
        <Version>vs</Version>
        <Input
          iconName="user"
          placeholder="Time de fora"
          // onChangeText={setName}
          // value={name}
        />
      </Time>
      <Time>
        <Input
          iconName="user"
          placeholder="Time da casa"
          // onChangeText={setName}
          // value={name}
        />
        <Version>vs</Version>
        <Input
          iconName="user"
          placeholder="Time de fora"
          // onChangeText={setName}
          // value={name}
        />
      </Time>
      <Time>
        <Input
          iconName="user"
          placeholder="Time da casa"
          // onChangeText={setName}
          // value={name}
        />
        <Version>vs</Version>
        <Input
          iconName="user"
          placeholder="Time de fora"
          // onChangeText={setName}
          // value={name}
        />
      </Time>
      <Buttons>
        <Button title="adicionar time" onPress={Add} />
        <Button title="remover time" onPress={Remove} />
      </Buttons>
    </Content>
  );
}
