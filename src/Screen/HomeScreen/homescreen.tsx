import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Switch,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import I18n from "../../Components/Config/i18n";
const HomeScreen = ({ ...props }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center", paddingVertical: 10 }}>
        {I18n.t("homeScreen")}
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
      <Text>{I18n.t("continue")}</Text>
    </View>
  );
};
export default HomeScreen;
