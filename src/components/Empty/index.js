import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Empty({ title }) {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>{title}</Text>
    </View>
  );
}
