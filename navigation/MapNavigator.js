import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationCard from "../components/NavigationCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapStack = createNativeStackNavigator();

const MapNavigator = () => {
  return (
    <MapStack.Navigator screenOptions={{ headerShown: false }}>
      <MapStack.Screen name="NavigationCard" component={NavigationCard} />
      <MapStack.Screen name="RideOptionsCard" component={RideOptionsCard} />
    </MapStack.Navigator>
  );
};

export default MapNavigator;
