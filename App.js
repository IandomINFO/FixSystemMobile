import { StyleSheet } from "react-native";
import { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blocos from "./src/components/Blocos";
import Salas from "./src/components/Salas";
import Objetos from "./src/components/Objetos";
import Homeview from "./src/components/Homeview";
const Stack = createNativeStackNavigator();

function HomeWrap({ navigation }) {
  return <Homeview navigation={navigation} />;
}
function BlocosWrap({ navigation }) {
  return <Blocos navigation={navigation} />;
}
function SalasWrap({ navigation }) {
  return <Salas navigation={navigation} />;
}
function ObjetosWrap({ navigation }) {
  return <Objetos navigation={navigation} />;
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
          <Stack.Screen name="Home" component={HomeWrap} />
          <Stack.Screen name="Blocos" component={BlocosWrap} />
          <Stack.Screen name="Salas" component={SalasWrap} />
          <Stack.Screen name="Objetos" component={ObjetosWrap} />
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
