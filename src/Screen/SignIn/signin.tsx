import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EventRegister } from "react-native-event-listeners";

import I18n from "../../Components/Config/i18n";

export default function Signinscreens({ props }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>sign in screen</Text>
      <TouchableOpacity
        onPress={() => {
          EventRegister.emit("login", true);
        }}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 10,
          width: 200,
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Text>{I18n.t("continue")}</Text>
      </TouchableOpacity>
    </View>
  );
}
