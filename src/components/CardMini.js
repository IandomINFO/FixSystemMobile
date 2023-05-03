import { StyleSheet, Text, View } from "react-native";
import { Component } from "react";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.titulo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB85D",
    alignItems: "center",
    justifyContent: "space-around",
    height: 60,
    width: 80,
    margin: 10,
  },
});
