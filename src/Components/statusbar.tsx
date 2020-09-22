import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
const StatusBars = ({ isDarkTheme, ...props }) => {
  return (
    <React.Fragment>
      <StatusBar
        backgroundColor={isDarkTheme ? "#2E2F2F" : "#FFFF"}
        style={isDarkTheme ? "light" : "dark"}
      />
      <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
    </React.Fragment>
  );
};

export default StatusBars;
