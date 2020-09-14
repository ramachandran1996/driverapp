import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback } from "react";
import { View, Button, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import { DrawerContent } from "./src/Router/drawercontent";
import { Maintab } from "./src/Router/index";
import { AuthContext } from "./src/Router/context";
let variable = "";
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isloading, setIsloading] = React.useState(false);
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
  // const authContext = React.useMemo(
  //   () => ({
  //     toggleTheme: () => {
  //       setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  //     },
  //   }),
  //   []
  // );
  useEffect(() => {
    getData();
    console.log("useseffesct");
  }, [isDarkTheme]);

  const getData = useCallback(async () => {
    setIsloading(false);
    try {
      const value = await AsyncStorage.getItem("@themeswitch");
      console.log("ram", value);
      if (value != null) {
        if (value == "true") {
          setIsDarkTheme(true);
          variable = value;
        } else {
          setIsDarkTheme(false);
          variable = value;
        }
        setIsloading(true);
      }
    } catch (e) {
      // error reading value
    }
  }, []);
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return isloading ? (
    // <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Maintab} />
        {/* <Drawer.Screen name="Notifications" component={ProfileStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <Text>loading</Text>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
