import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";

export default function Equipes({ data, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: data.crest }} style={styles.image} />
      <Text style={styles.title}>{data.name}</Text>
    </TouchableOpacity>
  );
}
