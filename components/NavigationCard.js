import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SearchAutoComplete from "./SearchAutoComplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import NavFavoutites from "./NavFavoutites";
import { Icon } from "@rneui/base";

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
      <NavFavoutites />
      <View className="flex-row py-4 mt-auto bg-white justify-evenly border-t border-gray-100">
        <TouchableOpacity
          className=" flex-row justify-between bg-black w-24 rounded-full py-3 px-4"
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={18} />
          <Text className="text-white text-center ">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-between w-24 rounded-full py-3 px-4"
          onPress={() => navigation.navigate("EatsScreen")}
        >
          <Icon name="fast-food-outline" type="ionicon" size={18} />
          <Text className="text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationCard;
