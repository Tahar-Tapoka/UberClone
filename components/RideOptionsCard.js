import { Image } from "@rneui/base";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";
import GoBackButton from "./GoBackButton";

const data = [
  {
    id: "1",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "2",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "13",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];
const RideOptionsCard = ({ navigation }) => {
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const SURG_CHARGE_RATE = 1.5 / 100;
  return (
    <SafeAreaView className="bg-white flex-grow">
      <GoBackButton />
      <Text className="text-center text-xl py-5 ">
        Select a ride - {travelTimeInformation?.distance.text}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`flex-row justify-between items-center px-5 ${
              item?.id === selected?.id && "bg-gray-200"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                height: 70,
                width: 70,
                resizeMode: "contain",
              }}
            />
            <View>
              <Text className="text-lg font-semibold">{item.title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel time</Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                travelTimeInformation?.duration.value *
                  SURG_CHARGE_RATE *
                  item.multiplier
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          className={`py-3 m-3 ${selected ? "bg-black" : "bg-gray-300"}`}
        >
          <Text
            className={`text-xl text-center ${
              selected ? "text-white " : "text-gray-500"
            }`}
          >
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
