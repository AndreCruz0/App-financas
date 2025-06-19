import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import  { HomeScreen}   from "../screens/HomeScreen";
import { TranslationsScreen }  from "../screens/TranslationsScreen"

export type RootStackParamList = {
  Home: undefined;
  Translations: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Translations" component={TranslationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
