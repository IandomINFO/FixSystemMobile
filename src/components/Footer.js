import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text> Home </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => this.props.navigation.navigate("Blocos")}
        >
          <Text> Blocos </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => this.props.navigation.navigate("Salas")}
        >
          <Text> Salas </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => this.props.navigation.navigate("Objetos")}
        >
          <Text> Objetos </Text>
        </TouchableOpacity>
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
  botao: {
    flex: 1,
    backgroundColor: "#4BB85D",
    alignItems: "center",
    justifyContent: "space-around",
    height: 60,
    width: 80,
    margin: 10,
  },
});
