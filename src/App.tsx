import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./LoginScreen";

const Stack = createNativeStackNavigator();

const GreetingApp = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="" component={} />
    </NavigationContainer>
  );
};

export default GreetingApp;
