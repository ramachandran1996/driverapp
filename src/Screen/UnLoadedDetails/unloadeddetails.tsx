import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, Button } from "react-native";

const UnLoadedScreen = ({ props }) => {
  return (
    <View>
      <Text>Unloadeded Screen</Text>
      <View style={{ paddingHorizontal: 20 }} />
    </View>
  );
};
export default UnLoadedScreen;
