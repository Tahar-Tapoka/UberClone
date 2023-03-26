import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "../googleApi";

const SearchAutoComplete = (props) => {
  return (
    <GooglePlacesAutocomplete
      returnKeyType="search"
      placeholder={props?.placeholder || "Search"}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      query={{
        key: API_KEY,
        language: "en",
      }}
      onPress={props.onPress}
      fetchDetails={true}
      styles={{
        container: {
          flex: 0,
          width: "100%",
          paddingTop: 20,
        },
        textInput: {
          fontSize: 18,
          backgroundColor: "#DDDDDF",
        },
        textInputContainer: { paddingHorizontal: 20 },
      }}
      enablePoweredByContainer={false}
    />
  );
};

export default SearchAutoComplete;

const styles = StyleSheet.create({});
