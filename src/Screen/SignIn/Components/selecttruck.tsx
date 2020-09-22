import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, TextInput } from "react-native";

import I18n from "../../../Components/Config/i18n";

export default function SelectTruck({}) {
  return (
    <View>
      <View
        style={{
          elevation: 3,
          width: "100%",
          height: 100,
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 22 }}>Select your truck</Text>
      </View>
      <View style={{ height: 10 }} />
    </View>
  );
}
