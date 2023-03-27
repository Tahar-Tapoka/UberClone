import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="z-10 absolute  top-3 left-5 p-4 rounded-full bg-gray-200"
    >
      <Icon name="chevron-left" type="font-awesome" size={16} />
    </TouchableOpacity>
  );
};

export default GoBackButton;
