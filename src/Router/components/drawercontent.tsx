import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";
export function DrawerContent({ props }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const { colors } = useTheme();
  const togglestorage = (value: boolean) => {
    setIsEnabled(!isEnabled);
    EventRegister.emit("themeSwitchEnabled", value);
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <DrawerContentScrollView {...props}>
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
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
