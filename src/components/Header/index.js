import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      {/* <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      /> */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
