import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";
import { SvgXml } from "react-native-svg";

export default function Competion({ data, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: data.emblem }} style={styles.image} />
      <Text style={styles.title}>{data.name}</Text>
    </TouchableOpacity>
  );
}
