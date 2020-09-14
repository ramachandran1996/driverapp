import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Button, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";

import { DrawerContent } from "./src/Router/drawercontent";
import { Maintab } from "./src/Router/index";
import { AuthContext } from "./src/Router/context";

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
  const authContext = React.useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme; 
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={Maintab} />
          {/* <Drawer.Screen name="Notifications" component={ProfileStackScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
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
