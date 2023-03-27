import { Input } from "@rneui/themed";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import NavFavoutites from "../components/NavFavoutites";
import NavOtions from "../components/NavOtions";
import SearchAutoComplete from "../components/SearchAutoComplete";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View className="pl-5 bg-white ">
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
      <NavFavoutites />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
