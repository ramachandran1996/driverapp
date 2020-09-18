import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, Button, TouchableOpacity } from "react-native";

const LanguageScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#A2D9CE",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#EC7063",
          padding: 10,
          borderRadius: 10,
          width: 200,
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
        }}
      >
        <Text>English</Text>
      </View>
      <View
        style={{
          backgroundColor: "#EC7063",
          padding: 10,
          borderRadius: 10,
          width: 200,
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
        }}
      >
        <Text>Tamil</Text>
      </View>
      <View
        style={{
          backgroundColor: "#EC7063",
          padding: 10,
          borderRadius: 10,
          width: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hindi</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
        style={{
          marginTop: 10,
          backgroundColor: "#0B5345",
          padding: 5,
          width: 150,
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LanguageScreen;
