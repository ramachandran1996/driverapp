import React, { useEffect, useCallback } from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { Text } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import AsyncStorage from "@react-native-community/async-storage";

import { SaveLocale, storeData } from "./src/Components/Config/i18n";
import { RootStackScreen } from "./src/Router/index";

export default function App(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isloading, setIsloading] = React.useState(false);
  const [islaunguage, setIslaunguage] = React.useState(false);
  const [isusertoken, setIsusertoken] = React.useState(null);
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };
  useEffect(() => {
    EventRegister.addEventListener("themeSwitchEnabled", (enabled) => {
      setIsDarkTheme(enabled);
      console.log("useefesst");
    });
    EventRegister.addEventListener("login", (token) => {
      setIsusertoken(token);
      console.log("useefesst");
    });
    getLaunguage();
  }, []);

  const getLaunguage = async () => {
    try {
      const value = await AsyncStorage.getItem("@launguage");
      console.log("async", value);
      if (value !== null) {
        SaveLocale(value);
        setIsloading(true);
      }
    } catch (e) {
      SaveLocale("English");
      setIsloading(true);
    }
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return isloading ? (
    <NavigationContainer theme={theme}>
      <RootStackScreen userToken={isusertoken} {...props} />
    </NavigationContainer>
  ) : (
    <Text>loading</Text>
  );
}
