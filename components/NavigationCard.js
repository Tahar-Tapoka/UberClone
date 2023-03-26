import { View, Text } from "react-native";
import React from "react";
import SearchAutoComplete from "./SearchAutoComplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";

const NavigationCard = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View className="bg-white flex-1 ">
      <Text className="text-center py-5 text-xl">NavigationCard</Text>
      <SearchAutoComplete
        placeholder="Where to?"
        onPress={(data, details = null) => {
          dispatch(
            setDestination({
              location: details.geometry.location,
              description: data.description,
            })
          );
          navigation.navigate("RideOptionsCard");
        }}
      />
    </View>
  );
};

export default NavigationCard;
