import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  Switch,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center", paddingVertical: 10 }}>
        Home screen
      </Text>

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
        onPress={() => navigation.navigate("Loaded")}
      >
        <Text>Go to loadedScreen Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
