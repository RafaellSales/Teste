// styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  matchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 8,
  },
  teamLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 10,
    borderRadius: 8,
  },
  verson: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    color: "red",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  num: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
