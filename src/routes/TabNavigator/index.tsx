import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Bolao from "../../screens/Bolao";
import Equipe from "../../screens/Equipe";
import AppRoutes from "../AppRoutes";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={AppRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipe"
        component={Equipe}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="dribbble" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bolao"
        component={Bolao}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clover" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
