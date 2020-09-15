import React, { useEffect, useCallback } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";

import { DrawerContent } from "./src/Router/drawercontent";
import { Maintab } from "./src/Router/index";
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const Drawer = createDrawerNavigator();
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
  }, []);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Maintab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
