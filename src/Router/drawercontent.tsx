import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
// import { color, Value } from "react-native-reanimated";
import AsyncStorage from "@react-native-community/async-storage";

// import { AuthContext } from "./context";
let storetostring = "";
export function DrawerContent(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isRender, setIsrender] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { colors } = useTheme();
  const paperTheme = useTheme();
  // const { toggleTheme } = React.useContext(AuthContext);
  const togglestorage = async (value) => {
    try {
      setIsEnabled((previousState) => !previousState);
      console.log("1enabled", isEnabled, value);
      // storetostring = isEnabled ? "true" : "false";
      storetostring = value ? "true" : "false";
      await AsyncStorage.setItem("@themeswitch", storetostring);
      // console.log("1enabledrender", storetostring);
    } catch (e) {
      // saving error
      console.log("error", e);
    }
  };
  const theme = async () => {
    try {
      const value = await AsyncStorage.getItem("@themeswitch");

      setIsEnabled(value == "true" ? true : false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    theme();
  }, [isEnabled]);
  // console.log("2enabledrender", isEnabled);
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
            {/* <TouchableOpacity
              onPress={() => {
                toggleTheme();
              }}
            >
              <Text style={{ color: colors.text }}>changetheme</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
