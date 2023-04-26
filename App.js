import { StyleSheet, Text, View } from "react-native";
import { Component } from "react";
import Header from "./src/components/Header.js";
import Card from "./src/components/Card.js";
import Footer from "./src/components/Footer.js";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={{ fontSize: 30, margin: 20 }}>Pagina inicial</Text>
        <View style={styles.content}>
          <Card titulo="Blocos" />
          <Card titulo="Salas" />
          <Card titulo="Objetos" />
        </View>

        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  content: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
