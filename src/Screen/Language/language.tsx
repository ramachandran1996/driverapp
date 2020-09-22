import { locale } from "i18n-js";
import React, { useEffect, useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import I18n, { SaveLocale } from "../../Components/Config/i18n";
import Button from "../../Components/StylesComponents/button";
import LanguageOption from "../../Components/languageTools";

const LanguageScreen = ({ navigation }) => {
  const [language, setLanguage] = useState(
    // eslint-disable-next-line no-nested-ternary
    I18n.locale == "tamil"
      ? "தமிழ்"
      : I18n.locale == "hindi"
      ? "हिन्दी"
      : "English"
  );
  // const [isloading, setIsloading] = useState(true);
  const languages = ["English", "தமிழ்", "हिन्दी"];

  const updatelaunguage = (value: string) => {
    console.log("language", value);
    SaveLocale(value);
    //why we use render the page
    setLanguage(value);
  };
  useEffect(() => {
    console.log("updated", I18n.locale, language);
  }, []);

  return (
    <View style={{ margin: 10, flex: 1, justifyContent: "space-between" }}>
      <View style={{}}>
        <View style={{ height: 50, justifyContent: "center" }}>
          <Text style={{ fontSize: 22 }}>{I18n.t("selectYourLanguage")}</Text>
        </View>
        <View>
          {languages.map((lang) => (
            <TouchableOpacity
              style={{ marginBottom: 5 }}
              key={lang}
              onPress={() => {
                updatelaunguage(lang);
              }}
            >
              <LanguageOption title={lang} selected={lang === language} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          color={"#2E2F2F"}
          onpress={() => {
            navigation.navigate("SignIn");
          }}
          title={"Continue"}
        />
      </View>
    </View>
  );
};
export default LanguageScreen;
