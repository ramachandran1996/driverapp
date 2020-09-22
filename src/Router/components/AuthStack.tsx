import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

import { LanguageScreen } from "../../Screen/Language";
import { SignIn } from "../../Screen/SignIn";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName={"Language"} mode="card">
    <AuthStack.Screen
      name="Language"
      component={LanguageScreen}
      options={{
        headerTitle: "JSM Driver",
        headerShown: true,
        headerTitleAlign: "center",
        // headerBackTitleStyle: { backgroundColor: "red", color: "green" },
        headerStyle: { backgroundColor: "#2E2F2F" },
        headerTintColor: "#FFFF",
      }}
    />
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        title: "Sign In",
        // headerShown: false,
        headerStyle: { backgroundColor: "#2E2F2F" },
        headerTitleAlign: "center",
        headerTintColor: "#FFFF",
        headerLeft: () => {
          return null;
        },
      }}
    />
  </AuthStack.Navigator>
);
export default AuthStackScreen;
