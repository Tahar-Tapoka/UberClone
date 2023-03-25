import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

const data = [
  {
    id: "111",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "222",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];
const NavOtions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity className="p-2, pl-6 pb-3 pt-4 bg-gray-200 m-2">
          <View className="bg-red">
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text className="mt-2 ml-2 text-lg font-semibold">
              {item.title}
            </Text>
            <Icon color="#0CC" name="arrowright" size={40} type="antdesign" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOtions;
