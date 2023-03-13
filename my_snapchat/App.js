import React from "react";
import { StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { NativeRouter, Route, Link } from "react-router-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterScreen from "./Components/RegisterScreen";
import LoginScreen from "./Components/LoginScreen";
import UserScreen from "./Components/LoginScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  
  return (

    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inscription" component={RegisterScreen} />
        <Tab.Screen name="Connexion" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
