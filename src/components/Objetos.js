import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
export default class Homeview extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={{ fontSize: 30, margin: 20 }}>Objetos</Text>
        <View style={styles.content}>
          <Text>Objetos</Text>
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
