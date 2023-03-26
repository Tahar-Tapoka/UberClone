import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import { API_KEY } from "../googleApi";
import MapViewDirections from "react-native-maps-directions";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);
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
