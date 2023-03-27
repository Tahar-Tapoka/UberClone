import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "../components/Map";
import MapNavigator from "../navigation/MapNavigator";
import { StatusBar } from "expo-status-bar";

const MapScreen = () => {
  return (
    <View>
      <View className="h-1/2">
        <Map />
        <StatusBar style="auto" />
      </View>
      <View className="h-1/2">
        <MapNavigator />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
