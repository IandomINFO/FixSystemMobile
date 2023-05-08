import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
export default class Objetos extends Component {
  state = {
    objetos: [
      {
        id: 1,
        nome: "Televisão",
      },
      {
        id: 2,
        nome: "Mesa1",
      },
      {
        id: 3,
        nome: "Mesa2",
      },
      {
        id: 4,
        nome: "Lampada",
      },
      {
        id: 5,
        nome: "Peninsula",
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Text style={{ fontSize: 30, margin: 20 }}>Objetos</Text>
        <View style={styles.content}>
          <View
            style={{
              backgroundColor: "lightgrey",
              minWidth: 150,
            }}
          >
            {this.state.objetos.map((objeto) => (
              <View
                key={objeto.id}
                style={{
                  flexDirection: "row",
                  fontSize: 20,
                  marginBottom: 5,
                  alignContent: "space-between",
                  justifyContent: "space-between",
                  padding: 5,
                  borderWidth: 1,
                  borderColor: "black",
                }}
              >
                <Text style={{ fontSize: 20 }}>{objeto.nome}</Text>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => this.props.navigation.navigate("Report")}
                >
                  <Image
                    style={styles.editicon}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/607/607870.png",
                    }}
                  ></Image>
                </TouchableOpacity>
              </View>
            ))}
          </View>
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
  botao: {
    flex: 1,
    backgroundColor: "#4BB85D",
    alignItems: "center",
    justifyContent: "center",

    height: 30,
    maxWidth: 25,
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
  editicon: {
    resizeMode: "contain",
    width: 17,
    height: 20,
  },
});
