import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Matche from "../../screens/Matche";
import Team from "../../screens/Team";
import Equipe from "../../screens/Equipe";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Equipe" component={Equipe} />
      <Screen name="Matche" component={Matche} />
      <Screen name="Team" component={Team} />
    </Navigator>
  );
}
