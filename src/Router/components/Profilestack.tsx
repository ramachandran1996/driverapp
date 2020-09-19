import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { IncentiveScreen } from "../../Screen/Incentive";
const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({ ...props }) => {
  const navigation = useNavigation();
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
        // component={IncentiveScreen}
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
      >
        {(_) => {
          return <IncentiveScreen {...props} />;
        }}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreen;
