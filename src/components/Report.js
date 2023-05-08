import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { TextInput } from "react-native-web";
export default class Objetos extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Text style={{ fontSize: 30, margin: 20 }}>Report</Text>
        <View style={styles.content}>
          <Text style={{ fontSize: 20 }}>Televisão</Text>
          <TextInput
            style={styles.input}
            placeholder="Escreva sobre o problema"
          />
          <TouchableOpacity style={styles.botao} onPress={() => ""}>
            <Text> Enviar </Text>
          </TouchableOpacity>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  botao: {
    flex: 1,
    backgroundColor: "#4BB85D",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 40,
    width: 80,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
