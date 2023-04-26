import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { Component } from "react";
import CardMini from "./src/components/CardMini.js";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Footer</Text>
        <CardMini titulo="Coisas" />
        <CardMini titulo="Coisas" />
        <CardMini titulo="Coisas" />
        <CardMini titulo="Coisas" />
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
    height: 70,
    width: Math.round(Dimensions.get("window").width),
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
