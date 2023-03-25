import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import NavOtions from "../components/NavOtions";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="items-center justify-center bg-white">
        <Image
          source={{ uri: "https://links.papareact.com/gzs" }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
        <Text className="text-red-500 p-10">HomeScreen</Text>
        <NavOtions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
