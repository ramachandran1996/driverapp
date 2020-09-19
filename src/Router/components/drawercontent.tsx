import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";

import I18n, { SaveLocale } from "../../Components/Config/i18n";
export function DrawerContent({ ...prop }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const { colors } = useTheme();
  const togglestorage = (value: boolean) => {
    setIsEnabled(!isEnabled);
    EventRegister.emit("themeSwitchEnabled", value);
  };
  const updatelaunguage = (value: string) => {
    console.log("language", value);
    SaveLocale(value);
    //why we use render the page
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <DrawerContentScrollView {...prop}>
        <View style={{ marginLeft: 10, marginTop: 10, alignSelf: "center" }}>
          <Text style={{ color: colors.text }}>Theme change</Text>
          <View style={{ marginTop: 20, alignSelf: "center" }}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(value) => togglestorage(value)}
              value={isEnabled}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#EC7063",
              padding: 10,
              borderRadius: 10,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
            onPress={() => {
              updatelaunguage("English");
            }}
          >
            <Text>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#EC7063",
              padding: 10,
              borderRadius: 10,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
            onPress={() => {
              updatelaunguage("தமிழ்");
            }}
          >
            <Text>Tamil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#EC7063",
              padding: 10,
              borderRadius: 10,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
              margin:5
            }}
            onPress={() => {
              updatelaunguage("हिन्दी");
            }}
          >
            <Text>Hindi</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
