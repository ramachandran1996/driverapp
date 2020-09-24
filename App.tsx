import React, { useEffect } from "react";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { Text } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import AsyncStorage from "@react-native-community/async-storage";
import { ReactQueryDevtools } from "react-query-devtools";

import CustomDefaultTheme from "./src/Components/Themes/CustomDefaultThem";
import CustomDarkTheme from "./src/Components/Themes/CustomDarkTheme";
import StatusBar from "./src/Components/statusbar";
import { SaveLocale, storeData } from "./src/Components/Config/i18n";
import { RootStackScreen } from "./src/Router/index";
export default function App(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isloading, setIsloading] = React.useState(false);
  // const [islaunguage, setIslaunguage] = React.useState(false);
  const [isusertoken, setIsusertoken] = React.useState(null);

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
    } finally {
      setIsloading(true);
    }
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  if (!isloading) {
    return <Text>loading</Text>;
  }

  return (
    <>
      <NavigationContainer theme={theme}>
        <StatusBar isDarkTheme={isDarkTheme}>
          <RootStackScreen userToken={isusertoken} {...props} />
        </StatusBar>
      </NavigationContainer>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </>
  );
}
