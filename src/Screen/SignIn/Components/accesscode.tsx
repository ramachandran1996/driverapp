import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, TextInput } from "react-native";

import I18n from "../../../Components/Config/i18n";

export default function AccessCode({}) {
  return (
    <View
      style={{
        elevation: 3,
        width: "100%",
        height: 100,
        padding: 10,
        backgroundColor: "white",
      }}
    >
      {/* <Text style={{ fontSize: 22 }}>Enter your access code</Text> */}
      <TextInput placeholder={"Enter your access code"} />
    </View>
  );
}
