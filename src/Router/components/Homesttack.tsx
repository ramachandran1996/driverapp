import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { HomeScreen } from "../../Screen/HomeScreen";
import { LoadedScreen } from "../../Screen/LoadedDetails";
import { DestinationScreen } from "../../Screen/Destination";
import { UnLoadedScreen } from "../../Screen/UnLoadedDetails";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ ...props }) => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator
      screenOptions={{
        animationEnabled: true,
      }}
      initialRouteName="Home"
      mode="card"
    >
      <HomeStack.Screen
        name="Home"
        // component={HomeScreen}
        options={{
          title: "Homepage",
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
          return <HomeScreen {...props} />;
        }}
      </HomeStack.Screen>
      <HomeStack.Screen
        name="Loaded"
        component={LoadedScreen}
        options={{
          title: "LoadedScreen",
        }}
      />
      <HomeStack.Screen
        name="Destination"
        component={DestinationScreen}
        options={{
          title: "Destination Screen",
        }}
      />
      <HomeStack.Screen
        name="UnloadedScreen"
        component={UnLoadedScreen}
        options={{
          title: "unloaded Screen",
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
