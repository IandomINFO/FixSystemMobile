import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Component } from "react";
export default class Header extends Component {
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
        <TouchableOpacity
          style={styles.card}
          onPress={() => this.props.navigation.navigate("Usuario")}
        >
          <Image
            style={styles.usericon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
            }}
          ></Image>
        </TouchableOpacity>
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
  usericon: {
    resizeMode: "contain",
    width: 40,
    height: 37,
  },
  headertext: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
});
