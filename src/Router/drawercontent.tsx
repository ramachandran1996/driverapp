import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Switch,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import { color } from "react-native-reanimated";

import { AuthContext } from "./context";

export function DrawerContent(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { colors } = useTheme();
  const paperTheme = useTheme();
  const { toggleTheme } = React.useContext(AuthContext);

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
              onValueChange={() => {
                toggleTheme();
              }}
              value={paperTheme.dark}
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
