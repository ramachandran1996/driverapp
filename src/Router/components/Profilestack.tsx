import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

import { IncentiveScreen } from "../../Screen/Incentive";
const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        animationEnabled: true,
      }}
      initialRouteName="profile"
      mode="card"
    >
      <ProfileStack.Screen
        name="profile"
        component={IncentiveScreen}
        options={{
          title: "overview",
          headerLeft: () => {
            return (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#009387"
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            );
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreen;
