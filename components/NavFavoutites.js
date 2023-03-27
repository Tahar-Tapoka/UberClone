import { Icon } from "@rneui/base";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  {
    id: "111",
    icon: "home",
    location: "Home",
    destination: "Code street, London, UK",
  },
  {
    id: "222",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavoutites = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => (
        <View className="bg-gray-200" style={{ height: 0.5 }} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {}}
          className="flex-row items-center p-2"
        >
          {/* <View className="mt-2 m-10 text-lg">
            <Icon color="#0CC" name={item.icon} size={40} type="entypo" />
            <Text className="text-lg">{item.location}</Text>
          </View> */}
          <Icon
            color="white"
            name={item.icon}
            size={32}
            type="ionicon"
            style={styles.icon}
            className="mr-4 rounded-full bg-gray-300 p-3"
          />
          <View>
            <Text className="text-lg fonts-semibold">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavoutites;

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: "gray",
    padding: 4,
  },
});
