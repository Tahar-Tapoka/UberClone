import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import { API_KEY } from "../googleApi";
import MapViewDirections from "react-native-maps-directions";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);
  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json
  ?destinations=40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626
  &origins=40.6655101%2C-73.89188969999998
  &key=${API_KEY}`;
      //     const URL = `https://maps.googleapis.com/maps/api/distancematrix/json
      // ?destinations=${destination.description}
      // &origins=${origin.description}
      // &key=${API_KEY}`;

      // const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origin=${origin.description}&destinations=${destination.description}&key=${API_KEY}`;
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination.description}&key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.rows[0].elements[0]);
          dispatch(setTravelTimeInformation(data?.rows[0]?.elements[0]));
        });
    };
    getTravelTime();
  }, [origin, destination, API_KEY]);
  return (
    <View>
      <MapView
        ref={mapRef}
        mapType="mutedStandard"
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: origin?.location.lat,
          longitude: origin?.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {destination && origin && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={API_KEY}
            strokeWidth={3}
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin?.location.lat,
              longitude: origin?.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
          />
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination?.location.lat,
              longitude: destination?.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
