import { Text, Image, View } from "react-native";
import { styles } from "./styles";
import React from "react";
export default function Matches({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.matchContainer}>
        <Text style={styles.title}>{data.homeTeam.name}</Text>
      </View>
      <Image source={{ uri: data.homeTeam.crest }} style={styles.image} />

      <Text style={styles.num}> {data.score.fullTime.home}</Text>
      <Text style={styles.verson}>vs</Text>
      <Text style={styles.num}>{data.score.fullTime.away}</Text>
      <Image source={{ uri: data.awayTeam.crest }} style={styles.image} />
      <View style={styles.matchContainer}>
        <Text style={styles.title}>{data.awayTeam.name}</Text>
      </View>
    </View>
  );
}
