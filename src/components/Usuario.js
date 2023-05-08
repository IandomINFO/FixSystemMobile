import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
export default class Usuario extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Text style={{ fontSize: 30, margin: 20 }}>Usuario</Text>
        <View style={styles.content}>
          <SafeAreaView>
            <TextInput style={styles.input} placeholder="Usuario" />
            <TextInput style={styles.input} placeholder="Senha" />
          </SafeAreaView>
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
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
    flexDirection: "column",
    flexWrap: "wrap",
  },
  botao: {
    flex: 1,
    backgroundColor: "#4BB85D",
    alignItems: "center",
    justifyContent: "center",

    maxHeight: 60,
    width: 80,
    margin: 10,
  },
});
