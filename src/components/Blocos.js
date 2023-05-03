import { StyleSheet, Text, View } from "react-native";
import { Component } from "react";

export default class Blocos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Blocos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
