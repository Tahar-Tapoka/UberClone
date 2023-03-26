import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import EatsScreen from "../screens/EatsScreen";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
        <AppStack.Screen name="MapScreen" component={MapScreen} />
        <AppStack.Screen name="EatsScreen" component={EatsScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
