import { Input } from "@rneui/themed";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import NavOtions from "../components/NavOtions";
import SearchAutoComplete from "../components/SearchAutoComplete";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View className="items-center justify-center bg-white">
      <Image
        source={{ uri: "https://links.papareact.com/gzs" }}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
      <SearchAutoComplete
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
      />
      <NavOtions navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
