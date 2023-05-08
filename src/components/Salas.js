import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
export default class Salas extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Text style={{ fontSize: 30, margin: 20 }}>Salas</Text>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Objetos")}
          >
            <Text> A1 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Objetos")}
          >
            <Text> A2 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Objetos")}
          >
            <Text> A3 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Objetos")}
          >
            <Text> A4 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Objetos")}
          >
            <Text> A5 </Text>
          </TouchableOpacity>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4BB85D",
    padding: 30,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  content: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 35,
  },
});
