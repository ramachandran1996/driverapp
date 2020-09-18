import React, { useEffect, useCallback } from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";

import { RootStackScreen } from "./src/Router/index";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
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
  }, []);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <RootStackScreen userToken={isusertoken}/>
    </NavigationContainer>
  );
}
