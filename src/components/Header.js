import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { Component } from "react";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoifc}
          source={{
            uri: "https://ifctour-ibirama.com.br/wp-content/uploads/2022/11/logo-ifc-ibirama.png",
          }}
        ></Image>
        <Text style={styles.headertext}>FixSystem </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#368443",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    maxHeight: 140,
    width: Math.round(Dimensions.get("window").width),
  },
  logoifc: {
    resizeMode: "contain",
    width: 120,
    height: 113,
  },
  headertext: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
});
