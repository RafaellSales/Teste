import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Equipe from "../../screens/Equipe";
import AppRoutes from "../AppRoutes";
import Bolao from "../../screens/Bolao";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
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
