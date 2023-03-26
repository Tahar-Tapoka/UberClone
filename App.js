import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <View style={styles.container}>
          <HomeScreen />
          <ExpoStatusBar style="auto" />
        </View>
      </NavigationContainer> */}
      <View style={styles.container}>
        <AppNavigator />
        <ExpoStatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
});
