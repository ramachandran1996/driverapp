import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

import { LanguageScreen } from "../../Screen/Language";
import { SignIn } from "../../Screen/SignIn";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName={"Language"}>
    <AuthStack.Screen name="Language" component={LanguageScreen} />
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
  </AuthStack.Navigator>
);
export default AuthStackScreen;
