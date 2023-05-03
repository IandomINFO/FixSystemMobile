import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { Component } from "react";
import CardMini from "./CardMini";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardMini titulo="Home" />
        <CardMini titulo="Blocos" />
        <CardMini titulo="Salas" />
        <CardMini titulo="Objetos" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#368443",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: Math.round(Dimensions.get("window").width),
    position: "absolute",
    minHeight: 100,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
