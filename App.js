import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Component } from "react";
import Header from "./src/components/Header.js";
import Footer from "./src/components/Footer.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blocos from "./src/components/Blocos";
import Salas from "./src/components/Salas";
import Objetos from "./src/components/Objetos";
const Stack = createNativeStackNavigator();

export class Homeview extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={{ fontSize: 30, margin: 20 }}>Pagina inicial</Text>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Blocos")}
          >
            <Text> Blocos </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.props.navigation.navigate("Salas")}
          >
            <Text> Salas </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Objetos")}
          >
            <Text> Objetos </Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </View>
    );
  }
}

function Home({ navigation }) {
  return <Homeview navigation={navigation} />;
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Blocos" component={Blocos} />
          <Stack.Screen name="Salas" component={Salas} />
          <Stack.Screen name="Objetos" component={Objetos} />
        </Stack.Navigator>
      </NavigationContainer>
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
