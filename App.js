import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
