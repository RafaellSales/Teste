import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

export default function Teams({ data }) {
  return (
    <View style={styles.container}>
      <Entypo name="user" size={24} color="black" />
      <View style={styles.player}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.subTitle}>{data.position}</Text>
      </View>
    </View>
  );
}
