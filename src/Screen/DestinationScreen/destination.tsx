import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, Button, TouchableOpacity } from "react-native";

const DestinationScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>Destination Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
          // width: 200,
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
          borderRadius: 20,
        }}
        onPress={() => navigation.navigate("UnloadedScreen")}
      >
        <Text>Go to UnloadedScreen Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DestinationScreen;
