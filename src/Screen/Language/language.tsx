import { locale } from "i18n-js";
import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, Button, TouchableOpacity } from "react-native";

import I18n, { SaveLocale } from "../../Components/Config/i18n";

const LanguageScreen = ({ navigation }) => {
  const [language, setLanguage] = useState("English");
  const updatelaunguage = (value: string) => {
    console.log("language",value);
    SaveLocale(value);
    //why we use render the page
    setLanguage(!language);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#A2D9CE",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#EC7063",
          padding: 10,
          borderRadius: 10,
          width: 200,
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
          width: 200,
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
          width: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          updatelaunguage("हिन्दी");
        }}
      >
        <Text>Hindi</Text>
      </TouchableOpacity>

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
        <Text style={{ color: "white" }}>{I18n.t("continue")}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LanguageScreen;
